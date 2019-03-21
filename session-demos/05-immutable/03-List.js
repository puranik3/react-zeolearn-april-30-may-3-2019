const { List } = require( 'immutable' );

const primes = List( [
    2, 3, 5, 7, 11, 13   
] );
const primesAnother = List( [
    2, 3, 5, 7, 11, 13
] );

const primesCopy = primes.set( 1, 'Three' );

console.log( primes );
console.log( primesCopy ); // immutable
console.log( primes === primesAnother ); // false
console.log( primes.equals( primesAnother ) ); // true - items are same

// simple array methods also work
const primesCopy2 = primes.push( 17 ).push( 19 );
console.log( primes );
console.log( primesCopy2 );

// complex methods can also be used
const primesGreaterThan10 = primes.filter( item => item > 10 );
console.log( primesGreaterThan10 );

const squarePrimes = primes.map( item => item * item );
console.log( squarePrimes );