import Form from '../components/Form';
import { connect } from 'react-redux';
import { updateUsernameAC } from '../actions/creators';

const mapStateToProps = state => ({ ...state.form });
const mapDispatchToProps = dispatch => ({
    updateUsernameAC: () => dispatch( updateUsernameAC() )
});

export default connect( mapStateToProps, mapDispatchToProps )( Form );