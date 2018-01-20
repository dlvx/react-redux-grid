import axios from 'axios';

const getLuke = () => {  
    return dispatch => {
      axios.get('/people/1')
        .then(luke => {
          dispatch(gotLuke(luke));
        });
    }
}
  
const gotLuke = (luke) => {  
    return {
      type: "GOT_LUKE",
      payload: luke
    };
}

export default getLuke