const john = {
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

// const name = john.name, secondaryContact = john.contacts[1].value, code = john.address.zip_code;

// address is not created as a variable - only zip_code is
const { name, address : { zip_code, state = 'Unknown' }, contacts : [ , { value : secondaryContact, countryCode : ccode = 'Unknown' } ] } = john;
console.log( name, zip_code, state, secondaryContact, ccode /* code */ );

function ajax( { url, method, success } ) {
    // use url, method, success now
    console.log( url, method, success );
}

ajax({
    success: function( response ) {},
    url: 'https://www.mydomain.com/endpoint',
    error: function( error ) {},
    method: 'GET'
});