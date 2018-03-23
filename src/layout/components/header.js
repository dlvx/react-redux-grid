import "../styles/header.scss"
import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import { Segment, Menu } from 'semantic-ui-react'

class Header extends Component {

    constructor(props){
        super(props);
        this.state = { activeItem: props.location.pathname }
    }
    

    handleItemClick (e, { name }) { this.setState({ activeItem: name }) }

    render(){
        return <div className="app-header">
            <Segment inverted attached>
                <Menu inverted pointing secondary >
                    <Menu.Item as={Link} to="/" name='/' active={this.state.activeItem === '/'} onClick={(e, item) => this.handleItemClick(e, item)} content="Home"/>
                    <Menu.Item as={Link} to="/grid" name='/grid' active={this.state.activeItem === '/grid'} onClick={(e, item) => this.handleItemClick(e, item)}/>
                </Menu>
            </Segment>
        </div>

        
    }
    
}

export default Header