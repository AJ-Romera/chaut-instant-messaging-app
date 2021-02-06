import { Avatar } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SidebarChat.css';

function SidebarChat({ id, name, addNewChat }) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = async (e) => {
        e.preventDefault();

        const roomName = prompt('Please enter a name for the chat room');

        await axios.post('https://chaut.herokuapp.com/rooms/new', {
            name: roomName,
        });
    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className='sidebarChat'>
                <Avatar
                    src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}
                />
                <div className='sidebarChat__info'>
                    <h2>{name}</h2>
                    <p>This is the last message</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat} className='sidebarChat'>
            <h2>Add new chat</h2>
        </div>
    );
}

export default SidebarChat;
