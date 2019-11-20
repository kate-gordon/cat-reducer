import { ACTION_NAP, ACTION_EAT, ACTION_PLAY, ACTION_SET_NAME } from './actionTypes'; 
 
export const catNap = () => ({
    type: ACTION_NAP
}); 

export const catEat = () => ({
    type: ACTION_EAT
}); 

export const catPlay = () => ({
    type: ACTION_PLAY
}); 

export const setName = petName => (
    {
    type: ACTION_SET_NAME,
    payload: {
         petName 
    }
}); 



