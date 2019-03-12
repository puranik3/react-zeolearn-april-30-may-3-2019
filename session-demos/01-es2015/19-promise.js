// Promise
// let promise = new Promise();

// callback hell - unreadable code
// security concern - you are passing your function to a library function you are not sure of
// ajax1( function( resp ) {
//     ajax2( function( resp2 ) {

//     });
// });

function sum( x, y ) {
    let promise = new Promise( ( resolve, reject ) => { // this function is called during object initialization (inside of the Promise constructor)
        if( typeof x !== 'number' || typeof y !== 'number' ) {
            reject( new Error( 'at least one argument was not a number' ) );
            return;
        }

        // console.log( resolve, reject ); // both resolve and reject are functions
        setTimeout(() => {
            let result = x + y;
            resolve( result );
        }, 2000 );
    } );
    
    // setTimeout(() => {
    //     let result = x + y;
    //     // return result;
    //     cb( result );
    // }, 2000 );
    
    return promise;
}

function logResult( result ) {
    console.log( 'result = ', result );
    return result * 2;
}

let res = sum( 10, 20 );
console.log( 'res = ', res );

sum( 10, 20 )
   .then( logResult )
   .then(function( doubledResult ) {
        console.log( 'doubledResult = ', doubledResult );
        return sum( doubledResult, 'hello' );
   })
   .then(function( resultOfSecondSumCall ) {
        console.log( 'resultOfSecondSumCall = ', resultOfSecondSumCall );
   })
   .catch(function( error ) {
        console.log( error.message );
   });