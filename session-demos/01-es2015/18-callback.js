function sum( x, y, cb ) {
    setTimeout(() => {
        let result = x + y;
        // return result;
        cb( result );
    }, 2000 );
    // return undefined;
}

let res = sum( 10, 20, function( result ) {
    console.log( 'result = ', result );
});
console.log( 'res = ', res );