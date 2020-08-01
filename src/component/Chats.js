import React from 'react'
import Chat from './Chat';
function Chats() {
    return (
        <div className="chats">
            <Chat name="Kunal" message="Yo What's up" timestamp="40s ago" profilePic="https://m.media-amazon.com/images/M/MV5BMTQzMzQyMTYyM15BMl5BanBnXkFtZTcwNjYyMDI5Mg@@._V1_UY1200_CR106,0,630,1200_AL_.jpg"/>
            <Chat name="Kaley" message="Heya!! How are you doing?" timestamp="3h ago" profilePic="https://www.gstatic.com/tv/thumb/persons/169721/169721_v9_bb.jpg"/>
            <Chat name="Jim" message="let's catch up soon" timestamp="2d ago" profilePic="https://www.gstatic.com/tv/thumb/persons/314170/314170_v9_ba.jpg"/>
            <Chat name="Mayim" message="Nice buddy..." timestamp="1w ago" profilePic="https://www.gstatic.com/tv/thumb/persons/155/155_v9_ba.jpg"/>
        </div>
    )
}

export default Chats
