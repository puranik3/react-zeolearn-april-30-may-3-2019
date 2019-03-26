import { connect } from 'react-redux'
import ReviewPanel from '../components/ReviewPanel.js'
import { fetchingReviewsThunk } from '../actions/creators'
import { withRouter } from 'react-router'

const mapStateToProps = state => ( { ...state.products })

const mapDispatchToProps = dispatch => ({
    fetchReviews: () => dispatch( fetchingReviewsThunk() )
})

export default connect( mapStateToProps, mapDispatchToProps )( withRouter(ReviewPanel) )
