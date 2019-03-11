let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday'
];

// const first = days[0], second = days[1], fifth = days[4];

const [ first, second, , , fifth = 'Holiday', sixth = 'Holiday' ] = days;

console.log( first, second, fifth, sixth );