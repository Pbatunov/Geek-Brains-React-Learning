import React from 'react';
import MessageComponent from '../MessageComponent/MessageComponent';

const MessageList = ({ messages }) => {
        return messages.map(message => {
            return <MessageComponent id = {message.id} author = { message.author } text={ message.text } />
        })
    }

export default MessageList;