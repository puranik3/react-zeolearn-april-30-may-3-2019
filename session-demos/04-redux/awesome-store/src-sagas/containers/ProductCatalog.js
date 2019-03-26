import { connect } from 'react-redux';
import { fetchingProductsAC } from '../actions/creators';
import ProductCatalog from '../components/ProductCatalog';

const mapStateToProps = state => ( { ...state.products } );

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch( fetchingProductsAC() )
})

export default connect( mapStateToProps, mapDispatchToProps )( ProductCatalog );