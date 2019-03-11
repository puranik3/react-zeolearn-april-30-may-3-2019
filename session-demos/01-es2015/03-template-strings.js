let name = 'Jonathan Doe', message = "Good morning", age = 32;

// '<tr>' + 
//     '<td>' + name + '</td>' +
// '</tr>'

let greeting = `${message}
 ${name}!`;
console.log( greeting );

function getCategory( age ) {
    if( age < 35 ) {
        return 'millenial';
    } else if( age < 55 ) {
        return 'middle-aged';
    }
}

const tr = `
    <tr>
        <td>${name}</td>
        <td>${getCategory( age )}</td>
    </tr>
`;
console.log( tr );




