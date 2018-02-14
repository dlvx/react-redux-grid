import axios from 'axios';

const getLuke = () => {  
    return dispatch => {
      dispatch({type: "GET_LUKE"})
      axios.get('apis/people/1')
        .then(luke => {
          dispatch(gotLuke(luke));
        })
        .catch(payload => {
          dispatch({type: "GET_LUKE_ERROR", payload})
        });
    }
}
  
const gotLuke = (luke) => {  
    return {
      type: "GET_LUKE_SUCCESS",
      payload: luke
    };
}

export default getLuke