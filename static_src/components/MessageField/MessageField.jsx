import React from 'react';
import MessageList from '../MessageList/MessageList';
import './styles.scss'


const MessageField = ({ messages }) => {
    return (
        <div className="message__field">
            <MessageList messages={ messages } />
        </div>
    )
};

export default MessageField