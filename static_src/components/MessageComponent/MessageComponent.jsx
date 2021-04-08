import React from 'react';
import './styles.scss'
import  { author as authors } from '../Authors/Authors'

const MessageComponent = ({ id, author, text }) =>{
    let classString = 'message__wrapper';
    if (author === authors.me) classString += ' right'
    return(
        <div key = { id } className={ classString }>
            <div className="message__text">{ text }</div>
            <div className="message__author">{ author }</div> 
        </div>
    )
}

export default MessageComponent;