import "../styles/header.scss"
import React from 'react';
import {
  Link
} from 'react-router-dom'

const Header = props => {

    return <div className="header">
        <h3>Header</h3>
        <Link to="/">Home </Link>
        <Link to="/grid">Grid</Link>
    </div>
}

export default Header