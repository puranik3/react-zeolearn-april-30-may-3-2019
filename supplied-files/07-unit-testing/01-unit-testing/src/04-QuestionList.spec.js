jest.mock( './Questions.service.js' );
import QuestionsService from './Questions.service.js';
import QuestionList from './QuestionList';

import React from 'react';
import { shallow } from 'enzyme';

describe( 'QuestionList', () => {
    it( 'loads with a fetched set of questions', () => {
        const response = [
            { title: 'How to pass data during routing?' },
            { title: 'Best way to handle errors in React' }
        ];
        QuestionsService.get.mockResolvedValue( response );
        
        const wrapper = shallow( <QuestionList /> );

        // https://github.com/airbnb/enzyme/issues/964
        // without this the state after shallow() call is the QUESTIONLIST_FETCH state
        setTimeout(() => { // setImmediate could also be used (maybe even process.nextTick())
            expect( wrapper.state() ).toEqual({
                questions: response,
                error: null,
                status: 'QUESTIONLIST_FETCH_SUCCESS'
            });
        }, 0);
        //done();
    });
    
    it( 'ends up with a proper error state if QuestionsService.get() did not fetch questions due to some reason', () => {
        const response = [
            { title: 'How to pass data during routing?' },
            { title: 'Best way to handle errors in React' }
        ];
        QuestionsService.get.mockResolvedValue( response );
        
        const wrapper = shallow( <QuestionList /> );

        // https://github.com/airbnb/enzyme/issues/964
        // without this the state after shallow() call is the QUESTIONLIST_FETCH state
        setTimeout(() => { // setImmediate could also be used (maybe even process.nextTick())
            expect( wrapper.state() ).toEqual({
                questions: response,
                error: null,
                status: 'QUESTIONLIST_FETCH_SUCCESS'
            });
            done();
        }, 0);
    });
});