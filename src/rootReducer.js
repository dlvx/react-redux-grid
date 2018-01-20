
const initialState = {}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "GOT_LUKE":
            return Object.assign({}, state, {luke: action.payload})
        default:
            return state
    }
}

export default rootReducer