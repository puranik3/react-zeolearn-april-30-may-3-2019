// @todo Turn this JS object into an immutable Map
const amazonEcho = {
    releaseDate: new Date( 2015, 9, 15 ),
    name: 'Amazon Echo v1',
    price: 100,
    specs: {
        weight: 200,
        wattage: 20
    }
};

// @todo Use set() to update a value (i.e. get a new Immutable value). Observe that specs is a plain JS object an is still mutable

// @todo Make specs a map too