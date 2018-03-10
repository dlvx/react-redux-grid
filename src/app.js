import React from 'react';
import { connect } from 'react-redux'

import {
  BrowserRouter as Router,
  Route,
  Link
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
        <Router>
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