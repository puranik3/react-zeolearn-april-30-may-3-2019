import { connect } from 'react-redux';
import App from '../components/App';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ( state, ownProps ) => {
    return state;
}

export default withRouter( connect( mapStateToProps )( App ) );