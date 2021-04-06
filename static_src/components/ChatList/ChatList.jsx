import React from 'react';
import './styles.scss';
import {ListItem, ListItemText} from '@material-ui/core';
import { getId } from '../../services/getId';


const ChatList = () => {
    return (
        <div className="messager__chatlist">
            <ListItem button key={ getId() }>
                <ListItemText primary="Чат 1" />
            </ListItem>
            <ListItem button key={ getId() }>
                <ListItemText primary="Чат 2" />
            </ListItem>
            <ListItem button key={ getId() }>
                <ListItemText primary="Чат 3" />
            </ListItem>
        </div>
    )
}
export default ChatList;