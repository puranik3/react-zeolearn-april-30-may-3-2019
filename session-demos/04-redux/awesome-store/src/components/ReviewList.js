import React, { Component } from 'react';

import { LOADING, FETCHING_REVIEWS, FETCHED_REVIEWS, FETCH_REVIEWS_ERRORED } from '../actions/constants';

class ReviewList extends Component {
  render() {
    console.log('ReviewList props: ', this.props)
    return (
      <div className='review-list'>LIST GOES HERE</div>
    )
  }

  componentDidMount() {
    console.log('Did Mount')
    //this.props.fetchReviews();
  }
}

export default ReviewList
