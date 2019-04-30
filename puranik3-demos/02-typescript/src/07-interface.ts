export {}

interface Person { 
    name: string,
    readonly age: number,
    role?: string
}

const john : Person = {
    name: 'John',
    age: 32
};

john.role = 'Finance executive';
john.age++;