import React from 'react';

const AddChatButton = ({ addChatHandler }) => {
    return (
        <button onClick = { addChatHandler }>Добавить чат</button>
    )
}

export default AddChatButton;