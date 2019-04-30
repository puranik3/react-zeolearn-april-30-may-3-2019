function greeting( message = 'Hello', name = 'World' ) {
    console.log( `${message} ${name}!` )
}

greeting( 'Hello', 'John' );
greeting( 'Good morning'  /*, undefined */ );
greeting( undefined, 'Mary' );