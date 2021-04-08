import React, { useEffect, useRef, useState } from 'react';
import { author } from './components/Authors/Authors';
import ChatList from './components/ChatList/ChatList';
import Header from './components/Header/Header';
import MessageField from './components/MessageField/MessageField';
import Form from './components/Form/Form';
import { getId } from './services/getId';
import './styles.scss'

const App = () => {

    const dataMessages = [{
        author: author.me,
        text: 'Привет!',
        id: getId()
     }, 
     {
        author: author.me,
        text: 'Как дела?',
        id: getId()
     }];
    const [messages, setMessages] = useState(dataMessages);
    const [value, setValue] = useState('');

    useEffect(() => {
        if (messages.length && messages[messages.length-1].author === author.me) {
            messages.push({
                id: getId(),
                author: author.bot,
                text: 'I am bot!'
            });
            setMessages([...messages]);
        }
    },[messages])


    const inputHandler = (e) => {
        setValue(e.target.value);
    }
    
    const submitHandler = (e) => {
        e.preventDefault();

        if (value !== '') {
            messages.push({
                id: getId(),
                author: author.me,
                text: value
            })

            setMessages([...messages]);
            setValue('');

        }
    }

    return (
        <div className="messager">
            <ChatList />
            <div className="messager__chat">
                <Header />
                <MessageField messages = { messages } />
                <Form value = { value } inputHandler = { inputHandler } submitHandler = { submitHandler } />
            </div>
        </div>
    )
}

export default App