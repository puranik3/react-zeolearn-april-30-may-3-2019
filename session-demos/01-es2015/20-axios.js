const axios = require( 'axios' );

axios.get( 'https://www.google.com' )
    .then(function( response ) {
        // console.log( 'response is ', response );
        return response.data;
    })
    .then(function( data ) {
        console.log( 'page contents = ', data );
    })
    .catch(function( error ) {
        console.log( error.message );
    });

const newProduct = {
    "name": "One Plus 6T",
    "code": "ONE-6",
    "releaseDate": "Mar 19, 2018",
    "description": "Android phone",
    "price": 700,
    "starRating": 4.2,
    "imageUrl": "https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/others/OnePlus-6T/OnePlus-6T-Mirror-Black-1-3x.jpg"
};

axios.post( 'https://awesome-store-server.herokuapp.com/products', newProduct )
    .then(function( response ) {
        console.log( response.data );
    })
    .catch(function( error ) {
        console.log( error.message );
    });