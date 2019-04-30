function getMessage() {
    const date = new Date();
    if( date.getHours() <= 12 ) {
        return 'Good morning'
    } else {
        return 'Good day';
    }
}

const name = 'John', message = 'Good morning';

const greeting = `${message} ${name}!`;
const greeting2 = `${getMessage()} ${name}!`;

console.log( greeting );
console.log( greeting2 );

const john = { name: 'John', age: 32, email: 'john@example.com' }
const tr = `
    <tr>
        <td>${john.name}</td>
        <td>${john.age}</td>
        <td>${john.email}</td>
    </tr>
`;

var z = 100;
console.log( tr );