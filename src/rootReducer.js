
const initialState = {
    data: {},
    status: null,
    error: null
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_LUKE":
            return Object.assign({}, state, {status: "LOADING"})
        case "GET_LUKE_SUCCESS":
            return Object.assign({}, state, {data: action.payload.data, status: "SUCCESS"})
        case "GET_LUKE_ERROR":
            return Object.assign({}, state, {data: action.payload.data, status: "ERROR"})
        default:
            return state
    }
}

export default rootReducer