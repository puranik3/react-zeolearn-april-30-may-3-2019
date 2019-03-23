import { connect } from 'react-redux';
import { fetchingReviewsAC } from '../actions/creators';
import ProductReviews from '../components/ProductReviews';

const mapStateToProps = state => ( { ...state.products } );

const mapDispatchToProps = dispatch => ({
    fetchReviews: () => dispatch( fetchingReviewsAC() )
})

export default connect( mapStateToProps, mapDispatchToProps )( ProductReviews );
