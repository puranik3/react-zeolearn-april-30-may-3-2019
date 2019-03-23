import { connect } from 'react-redux';
import { fetchingProductsThunk } from '../actions/creators';
import ProductDetail from '../components/ProductDetail';

const mapStateToProps = state => ( { ...state.products } );

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch( fetchingProductsThunk() )
})

export default connect( mapStateToProps, mapDispatchToProps )( ProductDetail );
