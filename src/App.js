import React, { useEffect, useState } from 'react';
import './App.css';
import Pusher from 'pusher-js';
import axios from './axios';

/* Components */
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';

function App() {
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('/messages/sync').then((response) => {
            setMessages(response.data);
        });
    }, []);

    useEffect(() => {
        const pusher = new Pusher('d8b17a5966dacdd69d8b', {
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

    console.log(messages);

    return (
        <div className='app'>
            {!user ? (
                <Login />
            ) : (
                <div className='app__body'>
                    <Sidebar />
                    <Chat messages={messages} />
                </div>
            )}
        </div>
    );
}

export default App;
