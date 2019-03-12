// generator function (allows use of yield)
function *counter() {
    yield 0;
    return 1;
}

const iterator = counter();
let result = iterator.next();
console.log( 'result = ', result );

result = iterator.next();
console.log( 'result = ', result );

for( let val of counter() ) {
    console.log( 'val = ', val );
}

