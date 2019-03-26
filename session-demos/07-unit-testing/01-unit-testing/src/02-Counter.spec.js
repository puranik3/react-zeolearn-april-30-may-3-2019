import React from 'react';
import Counter from './02-Counter';
import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';

/**
 * configuration done in setupTests.js
 */

describe( 'Counter component',  () => {
    let wrappedCounter;

    //beforeAll();
    beforeEach(() => { // this function is called before each test
        // setup
        wrappedCounter = shallow( <Counter /> );
    });

    it( 'should start with state having counter set to 0', () => {
        // execution
        // nothing to do

        // assertions
        expect( wrappedCounter.state().count ).toBe( 0 ); // props(), props().children
    });

    it( 'should increment count when increment button is clicked', () => {
        expect( wrappedCounter.state().count ).toBe( 0 );

        wrappedCounter.find( '#increment' ).simulate( 'click' );

        expect( wrappedCounter.state().count ).toBe( 1 );
    });
    
    it( 'should decrement count when decrement button is clicked', () => {
        expect( wrappedCounter.find( '#counter' ).text() ).toBe( "0" );

        wrappedCounter.find( '#increment' ).simulate( 'click' );

        expect( wrappedCounter.find( '#counter' ).text() ).toBe( "1" );
    });

    it( 'should match snapshot', () => {
        const snapshot = renderer.create( <Counter /> ).toJSON()
        expect( snapshot ).toMatchSnapshot();
    });

    //afterEach(() => {}); // after each test in the test suite
    //afterAll(() => {}); // once after all tests in this suite execute
});