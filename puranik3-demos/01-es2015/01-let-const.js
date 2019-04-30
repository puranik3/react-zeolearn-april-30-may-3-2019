let x = 10;
// let x = 20; // error: reinitialization not allowed

// block scope for let variables
for( let i = 0; i < 20; i++ ) {
    console.log( i );
}

// console.log( i ); // error

const y = 10;
// y = 20; // error: reassignment not allowed

const obj = {
    x: 1
};
obj.x = 2; // works
console.log( obj );