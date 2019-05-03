import {
    FETCH_PRODUCTS,
    FETCHED_PRODUCTS,
    FETCH_PRODUCTS_ERRORED
} from '../actions/constants';

const productsReducer = ( curState = { byId : {}, error : null }, action ) => {
    let newState;

    switch( action.type ) {
        case FETCH_PRODUCTS:
            newState = { byId : {}, error : null };
            break;
        case FETCHED_PRODUCTS:
            let rest = action.payload.products.reduce( 
                ( acc, product ) => {
                    acc.byId[product.id] = product;
                    return acc;
                },
                { byId : { } }
            );
            newState = { 
                ...curState,
                ...rest
            };
            break;
        case FETCH_PRODUCTS_ERRORED:
            newState = { ...curState, error: action.payload.error };
            break;
        default:
            newState = curState;
    }

    console.log( 'newState = ', newState );
    return newState;
};

export default productsReducer;