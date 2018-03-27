import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose  } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import {RootRouter} from './routing';
import App from './app'

let store = createStore(
    rootReducer, 
    {},
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

render(
  <Provider store={store}>
      <RootRouter>
          <App />
      </RootRouter>
  </Provider>,
  document.getElementById('app')
)