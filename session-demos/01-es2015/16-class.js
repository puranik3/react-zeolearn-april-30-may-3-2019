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

const john = new Person( 'John Doe', 32 );
console.log( john );

john.celebrateBirthday();
console.log( john );

Person.sayHello();