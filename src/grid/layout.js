
const defaultItemLayout = (id, row, col) => {
    return {
        i: id, 
        x: col, 
        y: row, 
        w: 1, 
        h: 1, 
        static: true
    }
}

export const buildLayout = (items, cols) => {
    
    let itemLayout

    let coordinates = []
    
    let rows = Math.round(items.length / cols) + 1
    
    for(let row = 0; row < rows; row++){
        for(let col = 0; col < cols; col++){
            coordinates.push({x: row, y: col})
        }
    }

    return items.map((item, index) => defaultItemLayout(item.id, coordinates[index].x, coordinates[index].y))

}

export const buildLayouts = (items, cols) => {
    
    let layouts = {}
    Object.keys(cols).forEach(key => {
        layouts[key] = buildLayout(items, cols[key])
    })

    return layouts
}

