// export const sum = ( x, y ) => x + y;
// export const product = ( x, y ) => x * y;

export * from './js/helper-arithmetic.js';

const sum = ( x, y ) => x + y;
const product = ( x, y ) => x * y;

const logError = function( error ) {
    console.assert.log( error.message );
};

export {
    sum,
    product
};

export default class ImaginaryNumber {
    constructor( real, imag ) {
        this.real = real;
        this.imag = imag;
    }

    print() {
        console.log( `${this.real} + ${this.imag}i` );
    }
}