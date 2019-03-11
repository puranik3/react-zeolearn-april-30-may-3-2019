// rest (...) - groups the arguments passed into an array
function sum( x, y, ...numbers ) { // can be useful
    console.log( x, y, numbers );
}

sum( 10, 20, 30, 40, 50 );
sum( 10, 20 );
sum( 10 );
sum();

const [ first, second, ...restOfItems ] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday'
];
console.log( restOfItems );

const { name, contacts, ...otherDetails } = {
    name: 'Jonathan Doe',
    age: 32,
    city: 'New York',
    contacts: [
        { type: 'email', value: 'john.doe@gmail.com' },
        { type: 'email', value: 'john.doe@example.com' },
        { type: 'phone', value: '1412345678' }
    ],
    address: {
        first_line: '64, Rosewell Ct',
        second_line: 'Templeton Avenue',
        city: 'New York',
        zip_code: 34567
    }
};
console.log( otherDetails );
