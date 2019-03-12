function *bar() {
    yield 100;
    yield 200;
    yield 300;
}

function *foo() {
    yield 1;
    yield *bar();
    yield 2;
}

let iter = foo();
console.log( iter.next() );
console.log( iter.next() );
console.log( iter.next() );
console.log( iter.next() );
console.log( iter.next() );
console.log( iter.next() );