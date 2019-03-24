import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import ReviewProduct from '../components/ReviewProduct'

const mapStateToProps = state => ( {
  ...state.reviews,
})

export default connect( mapStateToProps )( withRouter(ReviewProduct) )
