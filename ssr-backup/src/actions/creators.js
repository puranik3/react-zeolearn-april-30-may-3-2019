import ActionConstants from './constants';

function fetchProducts() {
    return {
        type: ActionConstants.FETCH_PRODUCTS,
    };
}

function fetchProductsSuccess( products ) {
    return {
        type: ActionConstants.FETCH_PRODUCTS_SUCCESS,
        payload: products
    };
}

function fetchProductsError( error ) {
    return {
        type: ActionConstants.FETCH_PRODUCTS_ERROR,
        payload: error
    };
}

function fetchProductDetails( productId ) {
    return {
        type: ActionConstants.FETCH_PRODUCT_DETAILS,
        payload: productId
    };
}

function fetchProductDetailsSuccess( product ) {
    return {
        type: ActionConstants.FETCH_PRODUCT_DETAILS_SUCCESS,
        payload: product
    };
}

function fetchProductDetailsError( error ) {
    return {
        type: ActionConstants.FETCH_PRODUCT_DETAILS_ERROR,
        payload: error
    };
}


function fetchProductsThunk() {
    return function( dispatch ) {
        dispatch( fetchProducts() );

        fetch( '/api/products' )
            .then( response => response.json() )
            .then( data => dispatch( fetchProductsSuccess( data ) ) )
            .catch( error => dispatch( fetchProductsError( error ) ) );
    };
}

function fetchProductDetailsThunk( productId ) {
    return function( dispatch ) {
        dispatch( fetchProductDetails( productId ) );

        fetch( '/api/products/' + productId )
            .then( response => response.json() )
            .then( data => dispatch( fetchProductDetailsSuccess( data ) ) )
            .catch( error => dispatch( fetchProductDetailsError( error ) ) );
    };
}

export {
    fetchProductsThunk,
    fetchProductDetailsThunk
};