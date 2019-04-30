function foo() {
    console.log( 'foo this = ', this );

    function sum1( x, y ) {
        console.log( x + y );
        console.log( this ); // window
    }

    const sum2 = function( x, y ) {
        console.log( x + y );
        console.log( this );
    };

    // ES2015 arrow function syntax
    // there is a semantic difference between sum2 and sum3
    const sum3 = ( x, y ) => {
        console.log( x + y );
        console.log( this );
    };

    const getSum = ( x, y ) => x + y; // if there is a single line return statement
    const square = x => x * x; // single argument function need not have its argument enclosed within parenthesis

    sum1( 10, 20 );
    sum2( 10, 20 );
    sum3( 10, 20 );
}

foo.call( 'hello' );