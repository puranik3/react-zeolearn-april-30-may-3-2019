function foo( x, y ) {
    console.log( this, x, y ); // context of the function ("this")
}

foo();
foo.call( "hello", 10, 20 ); // one-time change in context ("this" refers to the string hello)

const boundFoo = foo.bind( { x : 1 }, 100 );
boundFoo( 200 );
boundFoo( 300 );
boundFoo( 400 );
boundFoo( 500 );

function f() {
    console.log( 'this within f = ', this );

    function g() {
        console.log( 'this within g = ', this );
    }

    g();
    
    const h = () => {
        console.log( 'this within h = ', this );
    }

    h();
}

f.call( "hello" );

const john = {
    name: 'John',
    printName() { // "this" will refer to the object (john) - usually
        console.log( this.name );
    }
};

john.printName();

const printName = john.printName;
printName();
