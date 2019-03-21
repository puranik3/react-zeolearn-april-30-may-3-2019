import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { incrementAC, decrementAC } from '../actions/creators';

const mapStateToProps = state => ( { counter: state.counter } );
const mapDispatchToProps = dispatch => ({
    increment: () => dispatch( incrementAC() ),
    decrement: () => dispatch( decrementAC() )
});

export default connect( mapStateToProps, mapDispatchToProps )( Counter );