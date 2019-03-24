import { connect } from 'react-redux'
import ReviewPanel from '../components/ReviewPanel.js'
import { withRouter } from 'react-router'

const mapStateToProps = state => ( { ...state.products })

export default connect( mapStateToProps )( withRouter(ReviewPanel) )
