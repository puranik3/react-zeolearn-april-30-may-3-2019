import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';

import { Product as ProductService } from '../services/Product';
import Review from '../models/Review';

interface Props {
    productId: number
}

class ReviewForm extends Component<RouteComponentProps & Props, any> {
    // @todo Define refs for input elements
    reviewerRef : React.RefObject<HTMLInputElement> = React.createRef();
    starRatingRef : React.RefObject<HTMLInputElement> = React.createRef();
    reviewRef : React.RefObject<HTMLTextAreaElement> = React.createRef();
    titleRef : React.RefObject<HTMLInputElement> = React.createRef();

    constructor( props : RouteComponentProps & Props ) {
        super( props );

        // @todo State for form
        this.state = {
            values: {
                reviewer: 'John',
                starRating: '',
                title: '',
                review: ''
            },
            errors: {
                reviewer: '',
                starRating: '',
                title: '',
                review: ''
            }
        }
    }

    isValid = () => {
        const { reviewer, starRating, title, review } = this.state.values;

        return reviewer !== '' && starRating !== '' && title !== '' && review !== '';
    }

    updateValues = ( event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState(
            () => {
                return {
                    values: {
                        ...this.state.values,
                        [name]: value
                    },
                    errors: {
                        ...this.state.errors
                    }
                }
            },
            () => {
                this.checkValidity();
            }
        )
    }

    checkValidity() {
        const { reviewer, starRating, title, review } = this.state.values;

        let reviewerError : string, titleError : string, starRatingError : string, reviewError : string;

        if( reviewer === '' ) {
            reviewerError = 'Name cannot be empty';
        } else {
            reviewerError = '';
        }
        
        if( title === '' ) {
            titleError = 'Title cannot be empty'
        } else {
            titleError = '';
        }

        if( starRating === '' ) {
            starRatingError = 'Star rating cannot be empty'
        } else {
            starRatingError = '';
        }
        
        if( review === '' ) {
            reviewError = 'Review cannot be empty'
        } else {
            reviewError = '';
        }

        this.setState(
            () => {
                return {
                    values: { ...this.state.values },
                    errors: {
                        title: titleError,
                        starRating: starRatingError,
                        review: reviewError,
                        reviewer: reviewerError
                    }
                }
            }
        );
    }

    postReview = async ( event : React.FormEvent<HTMLFormElement> ) => {
        // @todo Make an Ajax call to POST /products/:productId/reviews, passing in review details (this.state.values)
        event.preventDefault();
        
        try {
            const review = await ProductService.postReview( this.props.productId, this.state.values as Review );
            this.props.history.push( `/catalog/${this.props.productId}` );
        } catch( error ) {
            alert( error.message );
        }
    }

    render() {
        return (
            <div className="my-3 p-2">
                <form className="form-horizontal" onSubmit={this.postReview}>
                    <div className="form-group">
                        <label htmlFor="reviewer" className="control-label">Your name</label>
                        <input type="text" id="reviewer" name="reviewer" className="form-control" ref={this.reviewerRef} value={this.state.values.reviewer} onChange={this.updateValues} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="starRating" className="control-label">Rating</label>
                        <input type="text" id="starRating" name="starRating" className="form-control" ref={this.starRatingRef} value={this.state.values.starRating} onChange={this.updateValues} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title" className="control-label">Title</label>
                        <input type="text" id="title" name="title" className="form-control" ref={this.titleRef} value={this.state.values.title} onChange={this.updateValues} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="review" className="control-label">Review</label>
                        <textarea id="review" name="review" className="form-control" ref={this.reviewRef} value={this.state.values.review}onChange={this.updateValues}></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" disabled={!this.isValid()}>Post review</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ReviewForm;