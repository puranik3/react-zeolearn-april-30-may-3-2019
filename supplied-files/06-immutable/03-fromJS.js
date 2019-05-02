// @todo Use fromJS to turn this into a deeply immutable object
const amazonEcho = {
    releaseDate: new Date( 2015, 9, 15 ),
    name: 'Amazon Echo v1',
    price: 100,
    specs: {
        weight: 200,
        wattage: 20
    }
};

// @todo Use setIn() to update specs.weight

// @todo Use updateIn() to update specs.weight (takes in a function to update the current value)