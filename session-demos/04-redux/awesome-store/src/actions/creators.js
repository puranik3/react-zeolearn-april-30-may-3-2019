import axios from 'axios'
import { LOADING, FETCHING_PRODUCTS, FETCHED_PRODUCTS, FETCH_PRODUCTS_ERRORED } from './constants';
import { FETCHING_PRODUCT, FETCHED_PRODUCT, FETCH_PRODUCT_ERRORED } from './constants';
import { FETCHING_REVIEWS, FETCHED_REVIEWS, FETCH_REVIEWS_ERRORED } from './constants';

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

export const fetchingProductAC = productId => ({
  type: FETCHING_PRODUCT,
  payload: {
    productId: productId
  }
})

export const fetchedProductAC = productId => ({
    type: FETCHED_PRODUCT,
    payload: {
        productId: productId
    }
});

export const fetchProductErroredAC = error => ({
    type: FETCH_PRODUCT_ERRORED,
    payload: {
        error: error
    }
});

export const fetchingProductThunk = () => {
    return dispatch => {
        dispatch( fetchingProductAC() );

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

export const fetchingReviewsAC = reviews => ({
  type: FETCHING_REVIEWS,
  payload: {
    reviews: reviews
  }
})

export const fetchedReviewsAC = reviews => ({
    type: FETCHED_REVIEWS,
    payload: {
        reviews: reviews
    }
});

export const fetchReviewsErroredAC = error => ({
    type: FETCH_REVIEWS_ERRORED,
    payload: {
        error: error
    }
});

export const fetchingReviewsThunk = () => {
    return dispatch => {
        dispatch( fetchingReviewsAC() );

        axios.get( 'https://awesome-store-server.herokuapp.com/products' )
            .then( response => response.data )
            .then( reviews => {
                dispatch( fetchedReviewsAC( reviews ) );
            })
            .catch( error => {
                dispatch( fetchReviewsErroredAC( error ) );
            });
    };
};
