import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
function Chat({ name, message, timestamp, profilePic }) {
    return (
        <Link to={`/chat/${name}`} style={{textDecoration:'none', color:'inherit'}}>
            <div name="chat" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', height: '70px', borderBottom: '1px solid #f9f9f9' }}>
                <Avatar className="chat__image" alt={name} src={profilePic} />
                <div className="chat__details" style={{ flex: '1', paddingLeft: '20px' }}>
                    <h2>{name}</h2>
                    <p style={{ color: 'grey' }}>{message}</p>
                </div>
                <p className="chat__timestamp" style={{ color: 'grey' }}>{timestamp}</p>
            </div>
        </Link>
    )
}

export default Chat
