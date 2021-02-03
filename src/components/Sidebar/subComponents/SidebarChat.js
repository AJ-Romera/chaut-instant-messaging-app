import { Avatar } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './SidebarChat.css';

function SidebarChat({ id, name, addNewChat }) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = async (e) => {
        e.preventDefault();

        const roomName = prompt('Please enter a name for the chat room');

        await axios.post('http://localhost:9000/rooms/new', {
            name: roomName,
        });
    };

    /* const createChat = () => {
        const roomName = prompt('Please enter a name for the chat room');

        if (roomName) {
             database stuff here...
        }
    }; */

    return !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar
                src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}
            />
            <div className='sidebarChat__info'>
                <h2>{name}</h2>
                <p>This is the last message</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className='sidebarChat'>
            <h2>Add new chat</h2>
        </div>
    );
}

export default SidebarChat;
