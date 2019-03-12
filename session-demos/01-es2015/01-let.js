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
// let x2 = 3; // not ok - redeclaration

if (true) {
  let x = 1
  var y = 3
}

// console.log(x) // not defined
 console.log(y)

function testing() {
  let q = 'block-scoped'
  var r = 'global-scoped'
}

// console.log(q) // not defined
// console.log(r) // not defined
// So with var functions contain their scope but for and if blocks do not.
