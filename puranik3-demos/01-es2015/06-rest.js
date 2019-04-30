'use strict';

/* ... (rest operator) can be applied to the last function argument */
function sum( x, y, ...arr ) {
    console.log( x, y, arr );
}

sum( 10, 20, 30, true, 'sdsc', 50 );

// destructring context
const days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'
];
const [ first, second, ...others ] = days;
console.log( first, second, others );

const john = {
    name: 'John Doe',
    age: 32,
    address: {
        first_line: 'No 150,Second street',
        second_line: 'Cambridge',
        city: 'Boston'
    },
    emails: [
        'john@example.com', 'john@foundationmedicine.com'
    ],
    getAddress() {
        // return this.first_line && this.first_line 
    }
};
const { name, address : { city }, ...otherDetails } = john;
console.log( otherDetails );
