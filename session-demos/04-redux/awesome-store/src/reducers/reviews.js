import { LOADING, FETCHING_REVIEWS, FETCHED_REVIEWS, FETCH_REVIEWS_ERRORED } from '../actions/constants';

export const reviewsReducer = ( curState = {
    status: LOADING,
    reviews: [],
    error: null
}, action ) => {
    let newState;

    switch( action.type ) {
        case LOADING:
            break;
        case FETCHING_REVIEWS:
            newState = {
                ...curState,
                status: FETCHING_REVIEWS,
                reviews: [],
                error: null
            };
            break;
        case FETCHED_REVIEWS:
            newState = {
                ...curState,
                status: FETCHED_REVIEWS,
                reviews: action.payload.reviews
            };
            break;
        case FETCH_REVIEWS_ERRORED:
            newState = {
                ...curState,
                status: FETCH_REVIEWS_ERRORED,
                error: action.payload.error
            };
            break;
        default:
            newState = curState;
    }

    return newState;
};
