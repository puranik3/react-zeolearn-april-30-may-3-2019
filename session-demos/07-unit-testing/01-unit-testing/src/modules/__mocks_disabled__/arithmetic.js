export default {
    sum: jest.fn( ( x, y ) => x + y ),
    product: jest.fn( () => 30 ) // always returns 30
};