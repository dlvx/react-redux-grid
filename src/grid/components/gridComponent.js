import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"
import "../styles/grid.scss"

import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import {Responsive, WidthProvider} from 'react-grid-layout';
import {buildLayouts} from '../layout'

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
    const cols = {lg: 4, md: 4, sm: 3, xs: 2, xxs: 1}
    const layout = buildLayouts(this.items, cols)

    this.state = {
      layout,
      cols
    }
  }

  componentWillMount(){
  }

  render() {

    let items = this.items.map((item) => <div key={item.id} className="grid-item"></div>)
    
    return (
      <div>
        <ResponsiveReactGridLayout 
          className="layout" 
          layouts={this.state.layout} rowHeight={300}
          breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
          cols={this.state.cols}
          >
          {items}
        </ResponsiveReactGridLayout>
      </div>
    )
  }
}

export default GridComponent