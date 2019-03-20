import { INCREMENT, DECREMENT, USERNAME_UPDATE } from './constants';

// action creators
export const incrementAC = () => ({
    type: INCREMENT
});

export const decrementAC = () => ({
    type: DECREMENT
});

export const updateUsernameAC = ( value ) => ({
    type: USERNAME_UPDATE,
    payload: {
        value: value
    }
});