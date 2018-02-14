
const defaultItemLayout = (id, coordinates) => {
    return {
        i: id, 
        x: coordinates.x, 
        y: coordinates.y, 
        w: 1, 
        h: 1, 
        static: true
    }
}

export const buildLayout = (items, cols) => {
    
    let itemLayout

    let coordinates = []
    
    let rows = Math.round(items.length / cols) + 1
    
    for(let y = 0; y < rows; y++){
        for(let x = 0; x < cols; x++){
            coordinates.push({x, y})
        }
    }

    return items.map((item, index) => defaultItemLayout(item.id, coordinates[index]))

}

export const buildLayouts = (items, cols) => {
    
    let layouts = {}
    Object.keys(cols).forEach(key => {
        layouts[key] = buildLayout(items, cols[key])
    })

    return layouts
}

