import React, { useState, useEffect, useRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { useParams } from "react-router-dom";
import './ChatScreen.css';

function ChatScreen({ match }) {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: 'Kaley',
            image: 'https://www.gstatic.com/tv/thumb/persons/169721/169721_v9_bb.jpg',
            message: 'Hello!!!'
        },
        {
            name: 'Kaley',
            image: 'https://www.gstatic.com/tv/thumb/persons/169721/169721_v9_bb.jpg',
            message: 'Heya!! How are you doing?'
        },
        {
            name: 'Kunal',
            image: 'https://m.media-amazon.com/images/M/MV5BMTQzMzQyMTYyM15BMl5BanBnXkFtZTcwNjYyMDI5Mg@@._V1_UY1200_CR106,0,630,1200_AL_.jpg',
            message: 'Yo Whats up'
        },
        {
            name: 'Jim',
            image: 'https://www.gstatic.com/tv/thumb/persons/314170/314170_v9_ba.jpg',
            message: 'Lets catch up soon'
        },
        {
            name: 'Mayim',
            image: 'https://www.gstatic.com/tv/thumb/persons/155/155_v9_ba.jpg',
            message: 'Nice buddy'
        },
        {
            message: 'Hello!! Whats up???'
        }
    ])
    let { person } = useParams();
    const updatedMessages = messages.filter(message=>message.name==person || !message.name)
    const messagesEndRef = useRef(null)
    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, { message: input }])
        setInput('')
    }
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
    useEffect(scrollToBottom, [messages]);

    return (
        <>
            <div className="chatScreen__scroll">
                <p className="chatScreen__timeStamp">You matched with {person} on 10/02/20</p>
                {updatedMessages.map((message) => (
                    message.name ? (
                        <div className="chatScreen__message">
                            <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
                            <p className="chatScreen__text">{message.message}</p>
                            <div ref={messagesEndRef} />
                        </div>
                    ) : (
                            <div className="chatScreen__message">
                                <p className="chatScreen__textUser">{message.message}</p>
                                <div ref={messagesEndRef} />
                            </div>
                        )
                ))}
            </div>
            <form className="chatScreen__input">
                <input value={input} onChange={e => setInput(e.target.value)} className="chatScreen__inputField" type="text" placeholder="Text a message" />
                <button onClick={handleSend} className="chatScreen__inputButton">SEND</button>
            </form>
        </>
    )
}

export default ChatScreen
