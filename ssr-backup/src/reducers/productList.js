import ActionConstants from '../actions/constants';

export default ( curState = { status: null, products: [], error: null }, action ) => {
    let newState;
    
    switch( action.type ) {
        case ActionConstants.FETCH_PRODUCTS:
            newState = { ...curState, status: ActionConstants.FETCH_PRODUCTS, products: [], error: null };
            console.log( newState );
            break;
        case ActionConstants.FETCH_PRODUCTS_SUCCESS:
            newState = { ...curState, status: ActionConstants.FETCH_PRODUCTS_SUCCESS, products : action.payload };
            console.log( newState );
            break;
        case ActionConstants.FETCH_PRODUCTS_ERROR:
            newState = { ...curState, status: ActionConstants.FETCH_PRODUCTS_ERROR, error : action.payload };
            console.log( newState );
            break;
        default:
            return curState;
    }

    return newState;
};