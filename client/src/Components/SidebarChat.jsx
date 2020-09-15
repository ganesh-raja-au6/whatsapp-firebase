import { Avatar } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import './SidebarChat.css'

function SidebarChat({addNewChat}) {
    const createChat = () => {
        const roomName = prompt('Enter room name')
        return roomName ? alert(roomName) : ''
    }
    
    return !addNewChat ? (
        <div className="sidebar-chat">
            <Avatar />
            <div className="sidebar-chat-content">
                <h2>Name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className="sidebar-chat">
            <h2>Add User</h2>
        </div>
    )
}

export default SidebarChat
