import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemText } from '@material-ui/core';
import { getId } from '../../services/getId';
import { useSelector } from 'react-redux';
import './styles.scss';

const ChatList = () => {
    const chatList = useSelector((state) => state.chatList);
    const chatsIds = Object.keys(chatList);
    const chatsItems = chatsIds.map((id) => {
        return <Link to={`/chat/${ id }/`}>
            <ListItem button key={ getId() }>
                <ListItemText primary={ chatList[id].name || `Новый чат ${ id }` } />
            </ListItem>
        </Link>
    })
    
    return(
        <div className="messager__chatlist">
            { chatsItems }
        </div>
    )
}
export default ChatList;