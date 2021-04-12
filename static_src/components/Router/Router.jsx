import React from 'react';
import { Switch, Link, Route, Redirect } from 'react-router-dom';
import App from '../App/App';
import Profile from '../Profile/Profile';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Redirect to='/chat/1/' />
            </Route>
            <Route path='/profile'>
                <Profile />
            </Route>
            <Route
                exact
                path='/chat/:chatId/'
                render={obj => <App chatId={Number(obj.match.params.chatId)} />
                }
            />
            <Redirect to='/chat/1/' />
        </Switch>
    );
}

export default Router;