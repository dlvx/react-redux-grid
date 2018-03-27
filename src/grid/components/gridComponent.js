import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"
import "../styles/grid.scss"

import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import {Responsive, WidthProvider} from 'react-grid-layout';
import {buildLayouts} from '../layout'
import {
  Link
} from 'react-router-dom'
import { Container, Grid, Segment } from 'semantic-ui-react'
import Card from '../../card/cardComponent'

const ResponsiveReactGridLayout = WidthProvider(Responsive);


class GridComponent extends React.Component {

  constructor(){
    super()
    this.items = []
    for(let i = 0; i < 63; i++){
      this.items.push({
        id: "gridelement" + i
      })
    }
  }

  render() {

    let items = this.items.map((item, index) => 
        <div key={item.id} className="grid-item">
          <Card index={index} item={item}/>
        </div>
      )
    
    return (
      <Segment basic>
        <Grid stackable centered relaxed columns={4}>
            {items}
        </Grid>
      </Segment>
    )
  }
}

export default GridComponent