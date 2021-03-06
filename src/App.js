import React, { useEffect, useState } from 'react';
import './App.css';
import Pusher from 'pusher-js';
import axios from './axios';
import { useStateValue } from './StateProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Components */
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';

function App() {
    const [messages, setMessages] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        axios.get('/messages/sync').then((response) => {
            setMessages(response.data);
        });
    }, []);

    useEffect(() => {
        axios.get('/rooms/sync').then((response) => {
            setRooms(response.data);
        });
    }, []);

    useEffect(() => {
        const pusher = new Pusher('1a91a311edf5e98e65c7', {
            cluster: 'eu',
        });

        const channel = pusher.subscribe('messages');
        channel.bind('inserted', (newMessage) => {
            setMessages([...messages, newMessage]);
        });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, [messages]);

    useEffect(() => {
        const pusher = new Pusher('1a91a311edf5e98e65c7', {
            cluster: 'eu',
        });

        const roomsChannel = pusher.subscribe('rooms');
        roomsChannel.bind('inserted', (newRoom) => {
            setRooms([...rooms, newRoom]);
        });

        return () => {
            roomsChannel.unbind_all();
            roomsChannel.unsubscribe();
        };
    }, [rooms]);

    return (
        <div className='app'>
            {!user ? (
                <Login />
            ) : (
                <div className='app__body'>
                    <Router>
                        <Sidebar rooms={rooms} />
                        <Switch>
                            <Route path='/rooms/:roomId'>
                                <Chat rooms={rooms} messages={messages} />
                            </Route>
                            <Route path='/'>
                                <Chat rooms={rooms} messages={messages} />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            )}
        </div>
    );
}

export default App;
