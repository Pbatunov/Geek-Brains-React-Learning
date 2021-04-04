import React from 'react';

const Input = ({ input, value, inputHandler }) => {
    return (
        <input type="text" ref = { input } value={ value } onInput = { inputHandler } placeholder="Введите сообщение" />
    )
}

export default Input