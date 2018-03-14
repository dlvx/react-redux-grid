import React from 'react';

import {
  HashRouter as Router
} from 'react-router-dom'


const RootRouter = (props) => {
    return (
        <Router>
            {props.children}
        </Router>
    )
}

export default RootRouter