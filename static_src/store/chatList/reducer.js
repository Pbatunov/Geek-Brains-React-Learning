import { ADD_CHAT } from "./types";

const initialState = {
    1: {
        name: "Работа"
    },
    2: {
        name: "Семья"
    },
    3: {
        name: "Друзья"
    }
}

export const chatListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT: {
            const chatId = Object.keys(state).length + 1;
                return {
                    ...state,
                    [chatId]: {}
                };
            }

            default:
                return state;
    }
};