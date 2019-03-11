sum1( 10, 20 ); // ok
// upto ES5
// function declaration
function sum1( x, y ) {
    var result = x + y;
    return result;
}

// sum2( 10, 20 ); // not ok

// function expression
const sum2 = function( x, y ) {
    var result = x + y;
    return result;
};

// arrow function (differs in behavior from sum1 and sum2)
const sum3 = ( x, y ) => {
    var result = x + y;
    return result;
};

const sum4 = ( x, y ) => x + y;

const square = x => x * x;