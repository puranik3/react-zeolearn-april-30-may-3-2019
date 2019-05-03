import ProductStore from './product';

function getStore() {
    return new ProductStore( 'INITIALIZING_PRODUCTS' );
}

export default getStore;