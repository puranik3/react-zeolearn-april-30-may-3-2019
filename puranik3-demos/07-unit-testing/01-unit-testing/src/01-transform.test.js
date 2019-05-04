// jest.fn() creates a mock function
// jest.mock() mocks an entire module (i.e. each of the exported functions, objects etc. will be stubbed)
jest.mock( './modules/arithmetic.js' );
import Arithmetic from './modules/arithmetic';

import Transform from './01-transform';

// @todo Test the transform module while mocking the arithmetic module - test that Arithmetic.sum is called twice and Arithmetic.product once, and the right result is obtained (use mockReturnValue() to setup return values of sum and product, and mock.calls)
it( 'Transform should call Arithmetic.sum() twice and Arithmetic.product() once', function() {
    Arithmetic.sum.mockReturnValue( 20 );
    Arithmetic.product.mockReturnValue( 50 );
    
    const result = Transform( 10, 20 );
    expect( result ).toBe( 20 );

    expect( Arithmetic.sum.mock.calls.length ).toBe( 2 );
    expect( Arithmetic.product.mock.calls.length ).toBe( 1 );
});