import { LOADING_REVIEWS, FETCHING_REVIEWS, FETCHED_REVIEWS, FETCH_REVIEWS_ERRORED } from '../actions/constants';

export const reviewsReducer = ( curState = {
    reviewsStatus: LOADING_REVIEWS,
    reviews: [],
    error: null
}, action ) => {
    let newState;

    switch( action.type ) {
        case LOADING_REVIEWS:
            break;
        case FETCHING_REVIEWS:
            newState = {
                ...curState,
                reviewsStatus: FETCHING_REVIEWS,
                reviews: [],
                error: null
            };
            break;
        case FETCHED_REVIEWS:
            newState = {
                ...curState,
                reviewsStatus: FETCHED_REVIEWS,
                reviews: action.payload.reviews
            };
            break;
        case FETCH_REVIEWS_ERRORED:
            newState = {
                ...curState,
                reviewsStatus: FETCH_REVIEWS_ERRORED,
                error: action.payload.error
            };
            break;
        default:
            newState = curState;
    }

    return newState;
};
