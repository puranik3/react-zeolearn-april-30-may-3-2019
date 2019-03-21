const { fromJS } = require( 'immutable' );

const amazonEcho = fromJS({
    releaseDate: new Date( 2015, 9, 15 ),
    name: 'Amazon Echo v1',
    price: 100,
    specs: {
        weight: 200,
        wattage: 20
    }
});

//const amazonEchoCopy = amazonEcho.get( 'specs' ).set( 'weight', 220 );
const amazonEchoCopy = amazonEcho.setIn( [ 'specs', 'weight' ], 220 );
const amazonEchoCopy2 = amazonEcho.updateIn( [ 'specs', 'weight' ], curWeight => curWeight + 50 );

console.log( amazonEcho );
console.log( amazonEchoCopy );
console.log( amazonEchoCopy2 );