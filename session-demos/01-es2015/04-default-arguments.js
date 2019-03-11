function greet( message = 'Hello', name = 'World' ) {
    console.log( `${message} ${name}!` );
}

greet( 'Hello', 'John' );
greet( 'Hello' ); // allowed
greet( undefined, 'Rita' );

let x; // undefined => as a string it is "undefined"