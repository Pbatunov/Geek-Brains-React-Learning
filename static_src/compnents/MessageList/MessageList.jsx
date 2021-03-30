import React from 'react';

const MessageList = ({id, author, text}) => {
    return(
        <div key = { id }>{author}: {text}</div>
    )
}

export default MessageList