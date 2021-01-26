import React from 'react';
import './Sidebar.css';

/* Icons */
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Avatar, IconButton } from '@material-ui/core';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar src='https://avatars.githubusercontent.com/u/71382951?s=460&u=2d787dad3fba263a3dfe8babd461a683d747227b&v=4' />
                <div className='sidebar__headerRight'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                    <SearchOutlinedIcon />
                    <input placeholder='Search or start new chat' type='text' />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
