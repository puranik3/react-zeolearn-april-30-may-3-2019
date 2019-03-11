var x1 = 1;
let x2 = 2;

for( var i = 0; i < 10; i++ ) { // no block-scope for var variables
    console.log( 'i = ', i );
}

console.log( 'outside loop, i = ', i );

for( let j = 0; j < 10; j++ ) { // let variables are block-scoped
    console.log( 'j = ', j );
}

// console.log( 'outside loop, j = ', j );

var x1 = 2; // ok!
let x2 = 3; // not ok - redeclaration