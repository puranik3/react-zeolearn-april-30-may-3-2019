import axios from 'axios';

export const Product = {
    async getProducts() {
        try {
            const response = await axios.get( `https://awesome-store-server.herokuapp.com/products/
            ` );
            return response.data;
        } catch( error ) {
            console.log( 'Some error : ', error.message );
            throw error; // let the caller handle it
        }
    },
    async getProduct( id : number ) {
        try {
            const response = await axios.get( `https://awesome-store-server.herokuapp.com/products/${id}
            ` );
            return response.data;
        } catch( error ) {
            console.log( 'Some error : ', error.message );
            throw error; // let the caller handle it
        }
    }
};