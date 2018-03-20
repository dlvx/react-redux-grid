import "../styles/header.scss"
import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import { Segment, Menu } from 'semantic-ui-react'

class Header extends Component {

    constructor(){
        super();
        this.state = { activeItem: 'home' }
    }
    

    handleItemClick (e, { name }) { this.setState({ activeItem: name }) }

    render(){
        return <div className="app-header">
            <Segment inverted attached>
                <Menu inverted pointing secondary >
                    <Menu.Item name='home' active={this.state.activeItem === 'home'} onClick={() => this.handleItemClick}/>
                    <Menu.Item name='grid' active={this.state.activeItem === 'grid'} onClick={() => this.handleItemClick}/>
                    {/*<Link to="/">Home </Link>
                    <Link to="/grid">Grid </Link>*/}
                </Menu>
            </Segment>
        </div>

        
    }
    
}

export default Header