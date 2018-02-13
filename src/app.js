import React from 'react';
import { connect } from 'react-redux'
import getLuke from './actions'
import GridComponent from './grid'
import {Header} from './layout'

class AppComponent extends React.Component {

  componentWillMount(){
    this.props.getLukeFunc()
  }

  render() {
    return (
        <div>
            <Header />
            <GridComponent />
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

const App = connect(
    mapStateToProps, mapDispatchToProps
)(AppComponent)

export default App