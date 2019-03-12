// generator function (allows use of yield)
function *counter() {
    let i = 0;
    while( true ) {
        yield i;
        i++;
    }
}

let iter1 = counter();
let iter2 = counter();

console.log( iter1.next() );
console.log( iter1.next() );
console.log( iter1.next() );
console.log( iter1.next() );

console.log( iter2.next() );
console.log( iter2.next() );
console.log( iter2.next() );
console.log( iter2.next() );

