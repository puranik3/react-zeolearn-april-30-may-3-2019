// Arrays, string, Map, Set
let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday'
];

for( let x of days ) {
    console.log( 'x = ', x );
}

var greeting = 'Hello World';

for( let ch of greeting ) {
    console.log( ch );
}

// how to make your object an iterable
// obj = {
//     [Symbol.iterator]: function() {
//         return {
//             next: function() {

//             }
//         }
//     }
// }