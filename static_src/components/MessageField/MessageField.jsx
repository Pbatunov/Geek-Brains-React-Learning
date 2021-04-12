import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MessageList from '../MessageList/MessageList';
import Form from '../Form/Form';
import { addMessage } from '../../store/messages/actions';
import { author } from '../../services/Authors';
import './styles.scss'

const MessageField = ({ chatId }) => {

    const [value, setValue] = useState('');
    const messages = useSelector((state) => state.messages);
    const dispatch = useDispatch();

    useEffect(() => {
        const lastMessage = messages[chatId][messages[chatId].length-1]
        if (messages[chatId].length > 0 && lastMessage.author === author.me) {
            dispatch(addMessage("I'll be back!", author.bot, chatId));
        }
    },[messages, addMessage])

    const inputHandler = (e) => {
        setValue(e.target.value);
    }
    
    const submitHandler = (e) => {
        e.preventDefault();

        if (value !== '') {
            dispatch(addMessage(value, author.me, chatId));
            setValue('');
        }
    }

    return (
        <>
            <div className="message__field">
                <MessageList messages={ messages[chatId] } />
            </div>
            <Form value = { value } inputHandler = { inputHandler } submitHandler = { submitHandler } />
        </>
    )
};

export default MessageField