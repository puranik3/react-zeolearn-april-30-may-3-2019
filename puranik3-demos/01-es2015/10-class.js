class Person {
    constructor( name, age ) {
        if( name === undefined ) {

        }

        if( typeof name === 'number' ) {
            // do something else 
        }

        console.log( this ); // newly created object
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++;
    }

    static sayHello() {
        console.log( 'hello' );
    }
}

class Employee extends Person {
    constructor( name, age, role, dept ) {
        super( name, age );
        this.role = role;
        this.dept = dept;
    }

    promote() {
        this.role = 'Seinor ' + this.role;
    }

    celebrateBirthday() {
        super.celebrateBirthday(); // calls Person class' celebrateirthday
        console.log( 'Happy birthday. Use this coupon to enjoy dinner at your favorite restaurant' );
    }
}

const john = new Person( 'John', 32 );
john.celebrateBirthday();
console.log( john );
Person.sayHello();

const mary = new Employee( 'Mary', 28, 'Senior Developer', 'IT' );
console.log( mary );
mary.promote()
console.log( mary );

mary.celebrateBirthday();
console.log( mary.age );

// Create a Movie class with properties like name, cast, showTimings etc.
class Movie {
    constructor( name, cast, showTimings ) {
        this.name = name;
        this.cast = cast;
        this.showTimings = showTimings;
    }    
}