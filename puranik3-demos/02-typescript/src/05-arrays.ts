export {}

// syntax 1
const days : (number | boolean | string)[] = [
    'Sun', 'Mon', 'Tue', 'Wed', true
];

// syntax 2
const days2 : Array<number | boolean | string> = [
    'Sun', 'Mon', 'Tue', 'Wed', true
];

days[4] = 5;
days[5] = false;

// all execution path are checked for type correctness
function sum( x : number, y : number ) {
    return x + y;
}

const result : string = sum( 10, 20 );