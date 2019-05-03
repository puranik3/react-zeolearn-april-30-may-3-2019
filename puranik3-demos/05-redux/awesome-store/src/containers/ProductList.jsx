import { connect } from 'react-redux';
import ProductList from '../components/ProductList';

import { fetchProductsThunk } from '../actions/creators';

const mapStateToProps = ( state ) => ({
    products: Object.values( state.products.byId )
});

const mapDispatchToProps = ( dispatch ) => ({
    fetchProducts: dispatch( fetchProductsThunk() )
});

export default connect( mapStateToProps, mapDispatchToProps )( ProductList );