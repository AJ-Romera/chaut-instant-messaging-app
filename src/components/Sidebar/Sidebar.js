import React from 'react';
import './Sidebar.css';
import SidebarChat from './subComponents/SidebarChat';
import { useStateValue } from '../../StateProvider';

/* Icons */
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Avatar, IconButton } from '@material-ui/core';

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar src={user?.photoURL} />
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

            <div className='sidebar__chats'>
                <SidebarChat addNewChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    );
}

export default Sidebar;
