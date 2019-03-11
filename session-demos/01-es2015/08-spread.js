// spread operator (...)
const numbers = [ 10, 40, 30, 20, 25 ];
console.log( Math.max( ...numbers ) );

// object spread
const john = {
    name: 'John',
    age: 32,
    address: {
        first_line: '64, Rosewell Ct',
        second_line: 'Templeton Avenue',
        city: 'New York',
        zip_code: 34567
    }
};

const johnCopy = { // creates a shallow copy (one-level copy) - but we explicitly copy address
    ...john,
    address: { // make an explicit copy of address
        ...john.address
    },
    spouse: 'Jenny',
    name: 'Jonathan', // in case of conflict, the one that comes last takes precedence
};

const johnCopy2 = { // creates a shallow copy (one-level copy)
    ...john,
    spouse: 'Jenny',
    name: 'Jonathan', // in case of conflict, the one that comes last takes precedence
};

john.age++;
john.address.zip_code = 45678;
console.log( john, johnCopy, johnCopy2 );