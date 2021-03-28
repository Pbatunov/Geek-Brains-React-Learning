import React from 'react';

let MessageList = ({author, text}) => {
    return(
        <div>{author}: {text}</div>
    )
}

export default MessageList