const { List } = require( "immutable" );

// @todo Turn these arrays into immutable Lists
const primes = new List([
    2, 3, 5, 7, 11, 13   
]);

const primesAnother = new List([
    2, 3, 5, 7, 11, 13
]);

// @todo Compare the two Lists using === and equals()
console.log( primes === primesAnother ); // false;
console.log( primes.equals( primesAnother ) ); // true;

// @todo Update one of the items using set() to get a new immutable List
const primesCopy = primes.set( 1, 'Three' );
console.log( primesCopy.get( 1 ) ); 

// @todo Verify that simple array methods like push() work on Lists
const morePrimes = primes.push( 17 );
console.log( morePrimes );

// @todo Verify that complex methods like filter() and map() can also be used
primes.map( prime => console.log( prime ) );