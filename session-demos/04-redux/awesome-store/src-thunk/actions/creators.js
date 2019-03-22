import axios from 'axios'
import { LOADING, FETCHING_PRODUCTS, FETCHED_PRODUCTS, FETCH_PRODUCTS_ERRORED } from './constants';

export const loadingAC = () => ({
    type: LOADING
});

export const fetchingProductsAC = () => ({
    type: FETCHING_PRODUCTS
});

export const fetchedProductsAC = products => ({
    type: FETCHED_PRODUCTS,
    payload: {
        products: products
    }
});

export const fetchProductsErroredAC = error => ({
    type: FETCH_PRODUCTS_ERRORED,
    payload: {
        error: error
    }
});

export const fetchingProductsThunk = () => {
    return dispatch => {
        dispatch( fetchingProductsAC() );

        axios.get( 'https://awesome-store-server.herokuapp.com/products' )
            .then( response => response.data ) 
            .then( items => {
                dispatch( fetchedProductsAC( items ) );
            })
            .catch( error => {
                dispatch( fetchProductsErroredAC( error ) );
            });
    };
};
