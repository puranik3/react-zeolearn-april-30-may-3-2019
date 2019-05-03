// jest.fn() creates a mock function
// jest.mock() mocks an entire module (i.e. each of the exported functions, objects etc. will be stubbed)
jest.mock( './modules/arithmetic.js' );
import Arithmetic from './modules/arithmetic';

import transform from './01-transform';

describe( 'The transform function', () => {
    it( 'should call Arithmetic.sum twice and Arithmetic.product once and get the right result', () => {
        // hard-code results from Arithmetic module's methods
        Arithmetic.sum.mockReturnValue( 10 );
        Arithmetic.product.mockReturnValue( 20 );
        
        const result = transform( 10, 20 );

        expect( Arithmetic.sum.mock.calls.length ).toBe( 2 );
        expect( Arithmetic.product.mock.calls.length ).toBe( 1 );

        expect( result ).toBe( 10 );
    });
});