import { FETCHING_REVIEWS } from '../actions/constants';
import { fetchedReviewsAC, fetchReviewsErroredAC } from '../actions/creators';

import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* reviewsFetchSaga() {
    try {
        const response = yield axios.get( 'https://awesome-store-server.herokuapp.com/products' );
        yield put( fetchedReviewsAC( response.data ) );
    } catch( error ) {
        yield put( fetchReviewsErroredAC( error ) );
    }
}

export function* watchReviewsFetch() {
    console.log( takeEvery( FETCHING_REVIEWS, reviewsFetchSaga ) );
    yield takeEvery( FETCHING_REVIEWS, reviewsFetchSaga );
}
