import ActionConstants from '../actions/constants';

export default ( curState = { status: null, product: {}, error: null }, action ) => {
    let newState;
    
    switch( action.type ) {
        case ActionConstants.FETCH_PRODUCT_DETAILS:
            newState = { ...curState, status: ActionConstants.FETCH_PRODUCT_DETAILS, product: {}, error: null };
            console.log( newState );
            break;
        case ActionConstants.FETCH_PRODUCT_DETAILS_SUCCESS:
            newState = { ...curState, status: ActionConstants.FETCH_PRODUCT_DETAILS_SUCCESS, product : action.payload };
            console.log( newState );
            break;
        case ActionConstants.FETCH_PRODUCT_DETAILS_ERROR:
            newState = { ...curState, status: ActionConstants.FETCH_PRODUCT_DETAILS_ERROR, error : action.payload };
            console.log( newState );
            break;
        default:
            return curState;
    }

    return newState;
};