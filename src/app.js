import React from 'react';
import { connect } from 'react-redux'

import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom'

import getLuke from './actions'
import {Header} from './layout'
import GridRouter from './grid'


class AppComponent extends React.Component {

  componentWillMount(){
    // this.props.getLukeFunc()
  }

  render() {
      
    return (
        <div>
            <Header location={this.props.location}/>
            <Switch>
                <Route exact path="/" render={() => {return <div>Home</div>}} />
                <Route path="/grid" component={GridRouter} />
            </Switch>
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