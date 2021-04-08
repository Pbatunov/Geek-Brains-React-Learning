import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemText } from '@material-ui/core';
import { getId } from '../../services/getId';
import './styles.scss';

const ChatList = ({ chats }) => {
    const chatsIds = Object.keys(chats);
    const chatsItems = chatsIds.map((id) => {
        return <Link to={`/chat/${id}/`}>
            <ListItem button key={ getId() }>
                <ListItemText primary={`Чат ${id}`} />
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