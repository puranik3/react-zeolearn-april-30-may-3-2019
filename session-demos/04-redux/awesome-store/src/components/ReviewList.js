import React, { Component } from 'react';

import { LOADING, FETCHING_REVIEWS, FETCHED_REVIEWS, FETCH_REVIEWS_ERRORED } from '../actions/constants';

class ReviewList extends Component {
  render() {
    let el

    switch ( this.props.reviewsStatus ) {
      case LOADING:
        el = (
          <div className="alert alert-success">
            We are working on it
          </div>
        )
        break;
      case FETCHING_REVIEWS:
        el = (
          <div className="alert alert-success">
            Fetching REVIEWS. Hang on...
          </div>
        )
        break;
      case FETCHED_REVIEWS:
        console.log(this.props)
        el = (
          <div>Reviews here</div>
        )
        break;
      case FETCH_REVIEWS_ERRORED:
        el = (
          <div className="alert alert-danger">
            Oops! Something went wrong while trying to fetch Reviews. ({this.props.error})
          </div>
        )
        break;
      default:
        el = ''
    }
    return (
      <div className='container'>{el}</div>
    )
  }

  componentDidMount() {
    console.log('Did Mount')
    this.props.fetchReviews();
  }
}

export default ReviewList
