import { ACTION_SET_NAME } from '../actionTypes'; 

const initialState = 'Cat'; 

const nameReducer = ( state = initialState, action) => {
    switch (action.type) {
        case ACTION_SET_NAME: {
          const { petName } = action.payload;

          return petName;
            
            
          };
          default: return state; 
        }
}
export default nameReducer; 

