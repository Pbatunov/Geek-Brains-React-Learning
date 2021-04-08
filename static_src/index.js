import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router/Router'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

ReactDOM.render(
    <BrowserRouter >
        <MuiThemeProvider>
            <Router />
        </MuiThemeProvider>
    </BrowserRouter>,
   document.getElementById('root')
);