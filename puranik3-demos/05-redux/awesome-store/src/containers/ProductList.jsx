import ProductList from '../components/ProductList';
import { connect } from 'react-redux';

const mapStateToProps = ( state ) => ({
    products: Object.values( state.products.byId )
});

export default connect( mapStateToProps/*, mapDispatchToProps */ )( ProductList );