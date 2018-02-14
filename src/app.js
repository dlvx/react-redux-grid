import React from 'react';
import { connect } from 'react-redux'

import {
  BrowserRouter as Router,
  Route,
  Link,
  hashHistory
} from 'react-router-dom'

import getLuke from './actions'
import {Header} from './layout'
import GridComponent from './grid'


class AppComponent extends React.Component {

  componentWillMount(){
    // this.props.getLukeFunc()
  }

  render() {
    return (
        <Router history={hashHistory}>
            <div>
                <Header />
                <Link to="/">Home </Link>
                <Link to="/grid">Grid</Link>
                <Route path="/grid" component={GridComponent} />
            </div>
        </Router>
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

const App = connect(
    mapStateToProps, mapDispatchToProps
)(AppComponent)

export default App