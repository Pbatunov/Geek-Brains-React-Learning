import React from 'react';
import './styles.scss'
import  { author as authors } from '../../services/Authors';
import { classNames } from '../../services/ClassNames';

const MessageComponent = ({ id, author, text }) =>{
    return(
        <div key = { id } className={ author === authors.me ? classNames.right : classNames.normal }>
            <div className="message__text">{ text }</div>
            <div className="message__author">{ author }</div> 
        </div>
    )
}

export default MessageComponent;