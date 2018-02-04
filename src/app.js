import React from 'react';
import { connect } from 'react-redux'
import getLuke from './actions'

class AppComponent extends React.Component {

  componentWillMount(){
    this.props.getLukeFunc()
  }

  render() {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>React - Redux Sandbox</h1>
            {
                this.props.status === "LOADING" ?
                "LOADING..." :
                JSON.stringify(this.props.data)
            }
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