import React from 'react';
import { connect } from 'react-redux'
import getLuke from './actions'
import GridComponent from './grid'

class AppComponent extends React.Component {

  componentWillMount(){
    this.props.getLukeFunc()
  }

  render() {
    return (
        <div>
            <h1>React - Redux Grid App</h1>
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