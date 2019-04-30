// ... (overloaded with rest)
const numbers = [ 10, 40, 20, 70, 90, 40, 25 ];
console.log( Math.max( 10, 40, 30 , 15 ) );
console.log( Math.max.apply( null, [ 10, 40, 20, 70, 90, 40, 25 ] ) );

Math.max( ...numbers );

// copy an object
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

const johnCopy = { ...john, address: { ...john.address }, emails: [ ...john.emails ] };
johnCopy.age++;
johnCopy.emails[0] = 'john@gmail.com';

console.log( johnCopy );
console.log( john );

// copy an array
const arr1 = [ 1, 2, 3 ], arr2 = [ 4, 5, 6 ];
const arr3 = [ ...arr1, ...arr2 ];
console.log( arr3 );