import { USERNAME_UPDATE } from '../actions/constants';

const formReducer = ( curState = { username: '', password: '' }, action ) => {
    let newState;

    // construct the new State
    switch( action.type ) {
        case USERNAME_UPDATE:
            newState = {
                ...curState,
                username: action.payload.value
            };
            break;
        default:
            newState = curState;
    }

    return newState;
}

export default formReducer;