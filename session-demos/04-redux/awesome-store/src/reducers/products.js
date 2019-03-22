import { LOADING, FETCHING_PRODUCTS, FETCHED_PRODUCTS, FETCH_PRODUCTS_ERRORED } from '../actions/constants';

export const productsReducer = ( curState = {
    status: LOADING,
    items: [],
    error: null
}, action ) => {
    let newState;

    switch( action.type ) {
        case LOADING:
            break;
        case FETCHING_PRODUCTS:
            newState = {
                ...curState,
                status: FETCHING_PRODUCTS,
                items: [],
                error: null
            };
            break;
        case FETCHED_PRODUCTS:
            newState = {
                ...curState,
                status: FETCHED_PRODUCTS,
                items: action.payload.products
            };
            break;
        case FETCH_PRODUCTS_ERRORED:
            newState = {
                ...curState,
                status: FETCH_PRODUCTS_ERRORED,
                error: action.payload.error
            };
            break;
        default:
            newState = curState;
    }

    return newState;
};
