export {}

class Person {
    name: string;
    private readonly age?: number;
    protected ssn: number;

    constructor( name : string, age : number, ssn : number ) {
        this.name = name;
        this.age = age;
        this.ssn = ssn;
    }

    celebrateBirthday() : void {
        this.age++; // readonly now - we cannot change the value
    }

    static sayHello() : void {
        console.log( 'hello' );
    }
}

class Employee extends Person {
    private role : string;
    private dept : string;

    constructor( name, age, ssn, role, dept ) {
        super( name, age, ssn );
        this.role = role;
        this.dept = dept;
    }

    promote() {
        console.log( this.ssn ); // protected
        console.log( this.age ); // private - cannot be used even in derived classes

        this.role = 'Seinor ' + this.role;
    }

    celebrateBirthday() {
        super.celebrateBirthday(); // calls Person class' celebrateirthday
        console.log( 'Happy birthday. Use this coupon to enjoy dinner at your favorite restaurant' );
    }
}

const john = new Person( 'John', 32, 1234 );
john.celebrateBirthday();
console.log( john.age ); // error: private
console.log( john );
Person.sayHello();

const mary = new Employee( 'Mary', 28, 2345, 'Senior Developer', 'IT' );
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