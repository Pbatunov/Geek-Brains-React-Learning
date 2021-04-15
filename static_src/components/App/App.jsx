import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addChat } from '../../store/chatList/actions';
import ChatList from '../ChatList/ChatList';
import Header from '../Header/Header';
import MessageField from '../MessageField/MessageField';
import { Button } from '@material-ui/core';
import './styles.scss';

const App = ({ chatId }) => {
    const dispatch = useDispatch();
    const addChatHandler = () => {
        dispatch(addChat())
    }

    return (
        <div className="messager">
            <div className="messager__sidebar">
                <Link to="/profile/">
                    <Button variant="contained" color="secondary" style={{marginBottom: '10px', textDecoration: 'none'}}> В профиль</Button>
                </Link>
                <Button onClick = { addChatHandler } variant="contained" color="primary">Добавить чат</Button>
                <ChatList />
            </div>
            <div className="messager__chat">
                <Header />
                <MessageField chatId = { chatId } />
            </div>
        </div>
    )
}

export default App;