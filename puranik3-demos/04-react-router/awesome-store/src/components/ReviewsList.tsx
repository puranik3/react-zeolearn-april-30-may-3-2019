import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { Product as ProductService } from '../services/Product';

import Review from '../models/Review';

interface State {
    reviews: Array<Review>,
    status: string
}

interface Props {
    productId: number
}

class ReviewsList extends Component<RouteComponentProps<any> & Props, State> {
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
                                    <div><strong>{review.title}</strong></div>
                                    <div><small>By <span className="font-italic">{review.reviewer}</span></small></div>
                                    <div>{review.text}</div>
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
        const reviews = await ProductService.getReviews( this.props.productId );

        this.setState({
            status: 'FETCHED_REVIEWS',
            reviews: reviews
        });
    }
}

export default ReviewsList;