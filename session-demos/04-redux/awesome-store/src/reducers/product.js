import { LOADING, FETCHING_PRODUCT, FETCHED_PRODUCT, FETCH_PRODUCT_ERRORED } from '../actions/constants';

export const productReducer = ( curState = {
    status: LOADING,
    item: null,
    error: null
}, action ) => {
    let newState;

    switch( action.type ) {
        case LOADING:
            break;
        case FETCHING_PRODUCT:
            newState = {
                ...curState,
                status: FETCHING_PRODUCT,
                item: null,
                error: null
            };
            break;
        case FETCHED_PRODUCT:
            newState = {
                ...curState,
                status: FETCHED_PRODUCT,
                items: action.payload.productId
            };
            break;
        case FETCH_PRODUCT_ERRORED:
            newState = {
                ...curState,
                status: FETCH_PRODUCT_ERRORED,
                error: action.payload.error
            };
            break;
        default:
            newState = curState;
    }

    return newState;
};
