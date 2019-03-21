const { Map } = require( 'immutable' );

const amazonEcho = Map({
    releaseDate: new Date( 2015, 9, 15 ),
    name: 'Amazon Echo v1',
    price: 100,
    specs: Map({
        weight: 200,
        wattage: 20
    })
});

const amazonEchoCopy1 = amazonEcho.set( 'price', 120 );
const specs = amazonEcho.get( 'specs' );
specs.set( 'weight', 220 );

console.log( amazonEcho );
console.log( amazonEchoCopy1 );
console.log( amazonEchoCopy1.get( 'price' ) );

console.log( amazonEcho.get( 'specs' ) );
console.log( amazonEchoCopy1.get( 'specs' ) );