import React, { Component } from 'react';

import { LOADING, FETCHING_REVIEWS, FETCHED_REVIEWS, FETCH_REVIEWS_ERRORED } from '../actions/constants';
import StarRating from '../components/StarRating'

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
          <div className='review-list' style={{margin: '2em 0'}}>
            <ul className='list-group'>
              {this.props.reviews.filter(
                review => String(review.productId) === this.props.match.params.id
              ).map(
                review => <li className='list-group-item' key={review.id}>
                  <h4 className='list-group-item-heading'>
                    <StarRating rating={review.starRating} total={5} /> {review.title}
                  </h4>
                  <div className='list-group-item-text'>
                    {review.text}
                    <div style={{marginTop: '1em'}}><em>— {review.reviewer},</em> {review.createdDate}</div>
                  </div>
                </li>
              )}
            </ul>
          </div>
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
      <div style={{}}>{el}</div>
    )
  }

  componentDidMount() {
    console.log('Did Mount')
    this.props.fetchReviews();
  }
}

export default ReviewList
