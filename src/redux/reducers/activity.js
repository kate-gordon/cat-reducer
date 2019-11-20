import { ACTION_NAP, ACTION_PLAY, ACTION_EAT } from '../actionTypes'; 

const initialState = 'drinking'; 
    


const activityReducer = ( state = initialState, action) => {
    switch(action.type) {
        case ACTION_NAP: {
            return 'napping';
                  
        }
        case ACTION_EAT: {
            return  'eating';
             
        }
        case ACTION_PLAY: {
            return 'playing' ; 
           
        }
        
        default: {
            return state;
        }
    }
};

export default activityReducer; 
