import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'

import GridComponent from './gridComponent'
import GridDetailComponent from './gridDetailComponent'

const GridRouter = () => (
  <Switch>
    <Route exact path='/grid' component={GridComponent}/>
    <Route path='/grid/:id' component={GridDetailComponent}/>
  </Switch>
)

export default GridRouter