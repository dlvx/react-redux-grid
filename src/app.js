import 'semantic-ui-css/semantic.min.css';

import React from 'react';
import { connect } from 'react-redux'

import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom'

import getLuke from './actions'
import {Header} from './layout'
import {SubRouter} from './routing'
import config from './config'

class AppComponent extends React.Component {

  componentWillMount(){
    // this.props.getLukeFunc()
  }

  render() {
    const routes = config.routes
    return (
        <div>
            <Header location={this.props.location}/>
            <SubRouter routes={routes} root/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        getLukeFunc: () => dispatch(getLuke())
    }
}

const App = withRouter(connect(
    mapStateToProps, mapDispatchToProps
)(AppComponent))

export default App