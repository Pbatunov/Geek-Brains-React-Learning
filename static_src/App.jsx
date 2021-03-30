import React,{ useEffect, useRef, useState } from 'react';
import MessageField from './compnents/MessageField/MessageField';
import Form from './compnents/Form/Form';
import { getId } from './services/getId';

let dataMessages = []

const App = () =>{
    const input = useRef(null);

    const [messages, setMessages] = useState(dataMessages);

    const [value, setValue] = useState('');

    useEffect(() => {
       input.current.focus();
    },[])

    useEffect(() => {
        if (dataMessages.length && dataMessages.length % 2 !== 0) {
            dataMessages.push({
                id: getId(),
                author: 'Бот',
                text: 'I am bot!'
            });
            setMessages([...dataMessages]);
        }
    },[messages])


    const inputHandler = (e) => {
        setValue(e.target.value);
    }
    
    const submitHandler = (e) => {
        e.preventDefault();

        if (value !== '') {
            dataMessages.push({
                id: getId(),
                author: 'Я',
                text: value
            });

            setMessages([...dataMessages]);
            setValue('');
        }
    }

    return (
        <div>
            <MessageField messages = { messages } />
            <Form input = { input } value = { value } inputHandler = { inputHandler } submitHandler = { submitHandler } />
        </div>
    )
}

export default App