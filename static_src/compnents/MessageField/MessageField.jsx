import React from 'react';
import MessageList from '../MessageList/MessageList';

const MessageField = ({messages}) => {
    return messages.map(message =>{
        return <MessageList key = {message.id} author = {message.author} text={message.text} />
    })
};

export default MessageField