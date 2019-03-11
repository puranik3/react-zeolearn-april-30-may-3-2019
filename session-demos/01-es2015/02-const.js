const x = 10;
// const x = 11; // not allowed (same as let)

// x = 11; // error!

const john = {
    name: 'John Doe',
    age: 32
};
console.log( john );

// john = { // error
//     name: 'Jonathan Doe',
//     age: 32
// };

john.name = 'Jonathan Doe';
console.log( john );