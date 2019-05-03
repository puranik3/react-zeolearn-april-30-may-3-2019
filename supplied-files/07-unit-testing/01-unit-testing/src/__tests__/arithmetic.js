import Arithmetic from '../modules/arithmetic';
import sinon from 'sinon';

// Test suite in Jest
describe.skip( 'The sum function', () => {
    // unit tests are specified using it()
    it.skip( 'returns 30 when 10 and 20 are passed', ( done ) => {
        // if you do something asynchronous, make sure to call done() once your test assertions are complete
        // setup phase
        // no setup

        // execution
        const result = Arithmetic.sum( 10, 20 );

        // assertions
        expect( result ).toBe( 30 ); // if you are comparing structure of 2 different objects, make sure to use toEqual() instead
        
        done();
    });
});

describe( 'The sumAsync function', () => {
    it( 'invokes the callback', done => {
        Arithmetic.sumAsync( 10, 20, ( result ) => {
            expect( result ).toBe( 30 );
            done();
        });

        const spy = sinon.spy();
        // assertions
        // expect( spy.callCount ).toBe( 1 );
        // expect( spy.args[0][0] ).toBe( 30 ); // [0][0] => [first call][first argument]
    });
    
    it( 'calls the passed callback with result 30 when 10 and 20 are passed', done => {
        done();
    });
});