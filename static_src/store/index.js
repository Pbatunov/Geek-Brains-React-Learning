import { createStore, combineReducers } from "redux";

import { chatListReducer } from "./chatList/reducer";
import { messagesReducer } from "./Messages/reducer";
import { profileReducer } from "./Profile/reducer";


const store = createStore(
    combineReducers({
        chatList: chatListReducer,
        messages: messagesReducer,
        profile: profileReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;