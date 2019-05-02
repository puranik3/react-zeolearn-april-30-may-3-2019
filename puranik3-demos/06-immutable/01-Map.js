const { Map } = require( 'immutable' );

// @todo Turn this JS object into an immutable Map
const amazonEcho = new Map({
    releaseDate: new Date( 2015, 9, 15 ),
    name: 'Amazon Echo v1',
    price: 100,
    specs: {
        weight: 200,
        wattage: 20
    }
});

const amazonEchoClone = new Map({
    releaseDate: new Date( 2015, 9, 15 ),
    name: 'Amazon Echo v1',
    price: 100,
    specs: {
        weight: 200,
        wattage: 20
    }
});

// @todo Use set() to update a value (i.e. get a new Immutable value). Observe that specs is a plain JS object an is still mutable
const amazonEchoAnother = amazonEcho.set( 'price', 120 );
console.log( amazonEcho.get( 'price' ) );
console.log( amazonEchoAnother.get( 'price' ) );

console.log( amazonEcho === amazonEchoClone ); // false
console.log( amazonEcho.equals( amazonEchoClone ) ); // true

// @todo Make specs a map too