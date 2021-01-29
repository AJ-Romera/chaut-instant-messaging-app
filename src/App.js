import React, { useEffect } from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import Pusher from 'pusher-js';

function App() {
    useEffect(() => {
        const pusher = new Pusher('d8b17a5966dacdd69d8b', {
            cluster: 'eu',
        });

        const channel = pusher.subscribe('messages');
        channel.bind('inserted', (data) => {
            alert(JSON.stringify(data));
        });
    }, []);

    return (
        <div className='app'>
            <div className='app__body'>
                <Sidebar />
                <Chat />
            </div>
        </div>
    );
}

export default App;
