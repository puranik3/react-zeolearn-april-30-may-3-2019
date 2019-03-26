import React from 'react';

import { LOADING, FETCHING_REVIEWS, FETCHED_REVIEWS, FETCH_REVIEWS_ERRORED } from '../actions/constants';
            
class ProductReviews extends React.Component {
    render() {
        console.log( 'this.props = ', this.props );
        let el;

        switch( this.props.status ) {
            case LOADING: 
                el = (
                    <div className="alert alert-info">
                        We are working on it...
                    </div>
                );
                break;
            case FETCHING_REVIEWS:
                el = (
                    <div className="alert alert-success">
                        Fetching REVIEWS. Hang on...
                    </div>
                );
                break;
            case FETCHED_REVIEWS:
                el = (
                    <React.Fragment>
                      <p>Yolo!</p>
                    </React.Fragment>
                );
                break;
            case FETCH_REVIEWS_ERRORED:
                el = (
                    <div className="alert alert-danger">
                        Oops! Something went wrong while trying to fetch REVIEWS. ({this.props.error})
                    </div>
                )
                break
            default:
                el = '';
        }
        
        return <div className="container">{el}</div>;
    }

    componentDidMount() { // called after component was added to the DOM
        this.props.fetchReviews();
    }
}

export default ProductReviews;
