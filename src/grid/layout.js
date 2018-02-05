
const defaultItemLayout = (index, col, row) => {
    return {i: index.toString(), x: col, y: row, w: 1, h: 2, static: true}
}

export const buildLayout = (items, cols) => {
    let col = 0
    let row = 0
    let itemLayout

    return items.map((item, index) => {
        
        itemLayout = defaultItemLayout(index, col, row)
        
        if(col < cols) col += 1
        else {
            col = 0
            row += 1
        }

        return itemLayout
    })
}

export const buildLayouts = (items, cols) => {
    
    let layouts = {}
    Object.keys(cols).forEach(key => {
        layouts[key] = buildLayout(items, cols[key])
    })

    return layouts
}

