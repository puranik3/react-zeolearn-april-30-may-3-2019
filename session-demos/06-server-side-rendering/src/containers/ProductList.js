import { connect } from 'react-redux';
import ProductList from '../components/ProductList';

const mapStateToProps = ( state, ownProps ) => {
    return state.productList;
}

export default connect( mapStateToProps )( ProductList );