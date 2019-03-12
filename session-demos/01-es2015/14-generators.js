function *foo() {
    let result1 = yield 1;
    let result2 = yield result1 + 100;
    let result3 = yield result2 + 200;
    yield result3;
    // return undefined; // default return statement
}

let iter = foo();
console.log( iter.next() ); // { value: 1, done: false }
console.log( iter.next( 123 ) ); // { value: 223, done: false }
console.log( iter.next( 300 ) ); // { value: 500, done: false }
console.log( iter.next() ); // { value: undefined, done: false }
console.log( iter.next() ); // { value: undefined, done: true }