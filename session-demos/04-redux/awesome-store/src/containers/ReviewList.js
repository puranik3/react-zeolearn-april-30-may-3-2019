import { connect } from 'react-redux'
import ReviewList from '../components/ReviewList'
import { fetchingReviewsThunk } from '../actions/creators'
import { withRouter } from 'react-router'

const mapStateToProps = state => ( {
  ...state.reviews,
})

const mapDispatchToProps = dispatch => ({
    fetchReviews: () => dispatch( fetchingReviewsThunk() )
})

export default connect( mapStateToProps, mapDispatchToProps )( withRouter(ReviewList) )
