import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { author } from '../../services/Authors';
import AddChatButton from '../AddChatButton/AddChatButton';
import ChatList from '../ChatList/ChatList';
import Header from '../Header/Header';
import MessageField from '../MessageField/MessageField';
import Form from '../Form/Form';
import { getId } from '../../services/getId';
import './styles.scss';

const App = ({ chatId }) => {

    const initChats = {
        1: [{
            id: getId(),
            author: author.me,
            text: 'Привет!'
         }, 
         {
            id: getId(),
            author: author.me,
            text: 'Как дела?'
         }],
         2: [{
            id: getId(),
            author: author.me,
            text: 'Hello!'
         }, 
         {
            id: getId(),
            author: author.me,
            text: 'How are you?'
         }],
         3: [{
            id: getId(),
            author: author.me,
            text: 'Hi!'
         },
         {
            id: getId(),
            author: author.bot,
            text: 'What are you doing man?',
         }]
    }
    const [chats, setChats] = useState(initChats);
    const [value, setValue] = useState('');
    useEffect(() => {
        const lastMessage = chats[chatId][chats[chatId].length-1]
        if (chats[chatId].length > 0 && lastMessage.author === author.me) {
            setChats({
                ...chats,
                [chatId]: [
                    ...chats[chatId],
                    {
                        id: getId(),
                        author: author.bot,
                        text: 'I am bot!'
                    }
                ]
            });
        }
    },[chats])

    const addChatHandler = () => {
        const chatsIds = Object.keys(chats);
        const lastChatId = parseInt(chatsIds[chatsIds.length - 1]);
        let addedChatId = lastChatId + 1
        console.log(addedChatId);
        setChats({
            ...chats,
            [addedChatId]: []
        });

    }

    const inputHandler = (e) => {
        setValue(e.target.value);
    }
    
    const submitHandler = (e) => {
        e.preventDefault();

        if (value !== '') {
            setChats({
                ...chats,
                [chatId]: [
                    ...chats[chatId],
                    {
                        id: getId(),
                        author: author.me,
                        text: value
                    }
                ]
            });
            setValue('');
        }
    }

    return (
        <div className="messager">
            <div className="messager__sidebar">
                <Link to="/profile/"><div>Профиль</div></Link>
                <AddChatButton addChatHandler = { addChatHandler } />
                <ChatList chats = { chats } />
            </div>
            <div className="messager__chat">
                <Header />
                <MessageField messages = { chats[chatId] } />
                <Form value = { value } inputHandler = { inputHandler } submitHandler = { submitHandler } />
            </div>
        </div>
    )
}

export default App;