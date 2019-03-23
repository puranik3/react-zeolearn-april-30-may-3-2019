import { connect } from 'react-redux';
import ProductDetail from '../components/ProductDetail';

const mapStateToProps = state => ( { ...state.products } );

export default connect( mapStateToProps )( ProductDetail );
