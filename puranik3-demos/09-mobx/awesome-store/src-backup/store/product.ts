import { observable, computed } from 'mobx';

// Method 1: Using an object
// export const productStore = observable({
//     status: 'INITIALIZING_PRODUCTS',
//     products: [],
//     error: null,
//     numberOfProducts: computed(() => {
//         return this.products.length;
//     })
// });

// Method 2: Using a class
class ProductStore {
    @observable
    status: string;

    @observable
    products: any[] = [];

    @computed
    get numberOfProducts() {
        return this.products.length;
    }

    constructor( status : string ) {
        this.status = status;
    }
}

export default ProductStore;