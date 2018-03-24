import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"
import "../styles/grid.scss"
import 'semantic-ui-css/semantic.min.css';

import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import {Responsive, WidthProvider} from 'react-grid-layout';
import {buildLayouts} from '../layout'
import {
  Link
} from 'react-router-dom'
import { Container, Card, Icon, Image, Grid, Segment } from 'semantic-ui-react'

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
    // const cols = {lg: 4, md: 4, sm: 3, xs: 2, xxs: 1}
    // const layout = buildLayouts(this.items, cols)

    // this.state = {
    //   layout,
    //   cols
    // }
  }

  componentWillMount(){
  }

  render() {

    let items = this.items.map((item, index) => 
        <div key={item.id} className="grid-item">
          <Card>
            <Image src={`https://loremflickr.com/g/320/240/mxr,pedal/all?random=${index}`} />
            <Card.Content>
              <Card.Header>Jose</Card.Header>
              <Card.Meta>Joined in 2016</Card.Meta>
              <Card.Description>Jose is a comedian living in Nashville.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Link to={`/grid/${item.id}`} className="grid-item-link">More</Link>
            </Card.Content>
          </Card>
        </div>
      )
    
    return (
      <Segment basic>
        {/*<ResponsiveReactGridLayout 
          className="layout" 
          layouts={this.state.layout} rowHeight={300}
          breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
          cols={this.state.cols}
          >
          {items}
        </ResponsiveReactGridLayout>*/}
        <Grid stackable centered relaxed columns={4}>
            {items}
        </Grid>
      </Segment>
    )
  }
}

export default GridComponent