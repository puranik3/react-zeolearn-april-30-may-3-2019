import { INCREMENT, DECREMENT } from '../actions/constants';

const counterReducer = ( curState = 0, action ) => {
    let newState;

    // construct the new State
    switch( action.type ) {
        case INCREMENT:
            newState = curState + 1;
            break;
        case DECREMENT:
            newState = curState - 1;
            break;
        default:
            newState = curState;
    }

    return newState;
}

export default counterReducer;