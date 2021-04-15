import { ADD_MESSAGE } from './types';
import { author } from '../../services/Authors';

export const addMessage = (text, author, chatId) => ({
    type: ADD_MESSAGE,
    text,
    author,
    chatId
});

export const addBotMessage = (chatId) => (dispatch, getState) => {
    const messages = getState().messages;
    const lastMessage = messages[chatId][messages[chatId].length-1]
    if (messages[chatId].length > 0 && lastMessage.author === author.me) {
        dispatch(addMessage("I'll be back!", author.bot, chatId));
    }
}