import React from 'react';

import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"
import "../styles/grid.scss"

import ReactGridLayout from 'react-grid-layout';
import {Responsive, WidthProvider} from 'react-grid-layout';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

import {buildLayouts} from '../layout'


class GridComponent extends React.Component {

  constructor(){
    super()
    this.items = []
    for(let i = 0; i < 30; i++){
      this.items.push({
        id: i
      })
    }
  }

  componentWillMount(){
  }

  render() {
    let cols = {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}
    return (
      <ResponsiveReactGridLayout 
        className="layout" 
        layouts={buildLayouts(this.items, cols)} rowHeight={30} width={1200}
        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={cols}
        >
        {
          this.items.map((item) => <div key={item.id} className="grid-item">{item.id}</div>)
        }
      </ResponsiveReactGridLayout>
    )
  }
}

export default GridComponent