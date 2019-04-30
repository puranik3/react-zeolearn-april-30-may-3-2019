export {}

interface Person { 
    name: string,
    readonly age: number,
    role?: string,
    celebrateBirthday: () => number,
    employeeLevel: 1 | 2 | 3 | 4 | 5
}

const john : Person = {
    name: 'John',
    age: 32,
    celebrateBirthday() {
        return this.age;
    },
    employeeLevel: 3
};

john.role = 'Finance executive';
john.age++; // cannot change readonly property value