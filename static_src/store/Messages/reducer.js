import { ADD_MESSAGE } from './types';
import { getId } from '../../services/getId';
import { author } from '../../services/Authors';

const initialState = {
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
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
            case ADD_MESSAGE: {
                const messages = state[action.chatId] || [];

                return {
                    ...state,
                    [action.chatId]: [...messages, {
                        id: getId(),
                        author: action.author,
                        text: action.text
                    }]
                }
            }

            default:
                return state;
    }
};