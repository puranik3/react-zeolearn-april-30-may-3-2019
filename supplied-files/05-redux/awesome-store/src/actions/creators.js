import {
    FETCH_PRODUCTS,
    FETCHED_PRODUCTS,
    FETCH_PRODUCTS_ERRORED
} from './constants';

import { Product as ProductService } from '../services/Product';
import Product from '../models/Product';

const fetchProductsAC = () => ({
    type: FETCH_PRODUCTS
});

const fetchedProductsAC = ( products ) => ({
    type: FETCHED_PRODUCTS,
    payload: {
        products
    }
});

const fetchProductsErroredAC = ( error ) => ({
    type: FETCH_PRODUCTS_ERRORED,
    payload: {
        error
    }
});

const fetchProductsThunk = () => async ( dispatch ) => {
    dispatch( fetchProductsAC() );

    try {
        const products = await ProductService.getProducts();
        dispatch( fetchedProductsAC( products ) );
    } catch( error ) {
        return dispatch( fetchProductsErroredAC( error ) );
    }
}

export {
    fetchProductsAC,
    fetchProductsThunk
};