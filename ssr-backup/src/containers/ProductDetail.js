import { connect } from 'react-redux';
import ProductDetail from '../components/ProductDetail';

const mapStateToProps = ( state, ownProps ) => {
    return state.productDetails;
}

export default connect( mapStateToProps )( ProductDetail );