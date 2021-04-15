import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { chatListReducer } from "./chatList/reducer";
import { messagesReducer } from "./messages/reducer";
import { profileReducer } from "./profile/reducer";
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {key: 'chat', storage};

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        chatList: chatListReducer,
        messages: messagesReducer,
        profile: profileReducer
    }),
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  
  export const persistor = persistStore(store);