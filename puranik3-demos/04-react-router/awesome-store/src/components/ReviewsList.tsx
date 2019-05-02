import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { Product as ProductService } from '../services/Product';

import Review from '../models/Review';

interface State {
    reviews: Array<Review>,
    status: string
}

class ReviewsList extends Component<RouteComponentProps<any>, State> {
    state = {
        reviews: [],
        status: 'INITIALIZING'
    };

    render() {
        switch( this.state.status ) {
            case 'FETCHED_REVIEWS':
                return (
                    <ul className="list-group">
                        {
                            this.state.reviews.map( ( review : Review ) => (
                                <li className="list-group-item">
                                    {review.reviewer}
                                    <br />
                                    {review.title}
                                    <br />
                                    {review.text}
                                </li>
                            ))
                        }
                    </ul>
                );
            default:
                return (
                    <div className="alert alert-danger">
                        Reviews not fetched or unable to fetch (error)
                    </div>
                );
        }
    }

    async componentDidMount() {
        const reviews = await ProductService.getReviews( this.props.location.state );

        this.setState({
            status: 'FETCHED_REVIEWS',
            reviews: reviews
        });
    }
}

export default ReviewsList;