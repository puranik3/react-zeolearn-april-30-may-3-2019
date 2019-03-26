import { LOADING, FETCHING_PRODUCTS, FETCHED_PRODUCTS, FETCH_PRODUCTS_ERRORED } from '../actions/constants';
import { fetchedProductsAC, fetchProductsErroredAC } from '../actions/creators';

import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* productsFetchSaga() {
    try {
        const response = yield axios.get( 'https://awesome-store-server.herokuapp.com/products' );
        yield put( fetchedProductsAC( response.data ) );
    } catch( error ) {
        yield put( fetchProductsErroredAC( error ) );
    }
}

export function* watchProductsFetch() {
    console.log( takeEvery( FETCHING_PRODUCTS, productsFetchSaga ) );
    yield takeEvery( FETCHING_PRODUCTS, productsFetchSaga );
}