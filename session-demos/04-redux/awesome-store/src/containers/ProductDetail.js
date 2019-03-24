import { connect } from 'react-redux';
import { fetchingProductsThunk, fetchingReviewsThunk } from '../actions/creators';
import ProductDetail from '../components/ProductDetail';

const mapStateToProps = state => ( { ...state.products } );

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch( fetchingProductsThunk() ),
    fetchReviews: () => dispatch( fetchingReviewsThunk() )
})

export default connect( mapStateToProps, mapDispatchToProps )( ProductDetail );
