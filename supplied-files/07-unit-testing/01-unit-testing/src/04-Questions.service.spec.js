// Good mock implementation of fetch API - http://www.wheresrhys.co.uk/fetch-mock/
// Using fetch in create-react-app (official docs/issues) - https://github.com/facebook/create-react-app/issues/967
jest.mock( 'axios' );
import axios from 'axios';
import Questions from './Questions.service';

describe( 'Questions service', () => {
    it( 'get() makes an axios call to fetch questions', () => {
        const response = {
            data: {
                items: [
                    { title: 'How to pass data during routing?' },
                    { title: 'Best way to handle errors in React' }
                ]
            }
        };
        axios.get.mockResolvedValue( response );
        
        return Questions.get()
                    .then(questions => {
                        expect( axios.get.mock.calls.length ).toBe( 1 );
                        expect( axios.get.mock.calls[0][0] ).toBe( 'https://api.stackexchange.com/2.0/questions?site=stackoverflow' );
                        expect( questions ).toEqual( response.data.items );
                    })
    })
});