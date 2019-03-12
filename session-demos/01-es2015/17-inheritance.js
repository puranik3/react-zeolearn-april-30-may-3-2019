class Person {
    constructor( name, age ) {
        this.name = name; // "this" will be the newly created object
        this.age = age;
    }

    celebrateBirthday() {
        this.age++;
    }

    static sayHello() {
        console.log( 'hello!' );
    }
}

class Employee extends Person {
    constructor( name, age, role, dept ) {
        super( name, age );
        this.role = role;
        this.dept = dept;
    }

    promote() {
        this.role = 'Senior ' + this.role;
    }

    celebrateBirthday() {
        super.celebrateBirthday();
        console.log( 'Hurray! Here is a coupon you can use for dining at your favorite restaurant' );
    }
}

const john = new Employee( 'John Doe', 32, 'Web Developer', 'IT' );
console.log( john );

john.celebrateBirthday();
console.log( john );

Person.sayHello();

john.promote();
john.promote();
john.promote();
console.log( john );