import { shallow } from 'enzyme';
import React from 'react';
import Counter from './02-Counter';
import renderer from 'react-test-renderer';

// @todo Check counter starts with state 0
describe( 'Counter', function() {
    let wrappedCounter;

    beforeEach(function() {
        wrappedCounter = shallow( <Counter /> );
    })

    it( 'starts with a state.count 0', function() {
        expect( wrappedCounter.state().count ).toBe( 0 );
    });

    it( 'increases count by 1 when increment button is clicked', function() {
        wrappedCounter.find( '#increment' ).simulate( 'click' );
        expect( wrappedCounter.state().count ).toBe( 1 );
    });
    
    it( 'decreases count by 1 when decrement button is clicked', function() {
        wrappedCounter.find( '#decrement' ).simulate( 'click' );
        expect( wrappedCounter.find( '#counter' ).text() ).toBe( "-1" );
    });


});

// @todo Create and check against snapshot (renderer.create( <Counter /> ).toJSON())