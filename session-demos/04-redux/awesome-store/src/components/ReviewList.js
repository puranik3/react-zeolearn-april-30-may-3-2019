import React, { Component } from 'react';

class ReviewList extends Component {
  render() {
    return (
      <div className='review-list'>LIST GOES HERE</div>
    )
  }

  componentDidMount() {
    console.log(this.props)
    //this.props.fetchReviews();
  }
}

export default ReviewList
