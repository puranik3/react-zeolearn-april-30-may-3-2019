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

// john.address.city
//const name = john.name;
const { name, spouseName = 'Jenny', age : Age, address : { city : residence = 'Boston' } } = john;
console.log( name, spouseName, Age, residence );
console.log( address ); // error - no variable called address