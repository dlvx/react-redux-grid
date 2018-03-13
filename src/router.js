import React from 'react';

import {
  HashRouter as Router
} from 'react-router-dom'

import App from './app.js';


const RouterComponent = () => {
    return (
        <Router>
            <App />
        </Router>
    )
}

export default RouterComponent