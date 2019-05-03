import axios from 'axios';
import Review from '../models/Review';

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
    },
    async getReviews( id : number ) {
        try {
            const response = await axios.get( `https://awesome-store-server.herokuapp.com/products/${id}/reviews
            ` );
            return response.data;
        } catch( error ) {
            console.log( 'Some error : ', error.message );
            throw error; // let the caller handle it
        }
    },
    async postReview( id : number, review : Review ) {
        try {
            const response = await axios.post( `https://awesome-store-server.herokuapp.com/products/${id}/reviews
            `, review );
            return response.data;
        } catch( error ) {
            console.log( 'Some error : ', error.message );
            throw error; // let the caller handle it
        }
    },
};