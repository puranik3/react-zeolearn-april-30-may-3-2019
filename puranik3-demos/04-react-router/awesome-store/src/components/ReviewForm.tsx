import React, { Component, isValidElement } from 'react';
import { RouteComponentProps } from 'react-router';

class ReviewForm extends React.Component<RouteComponentProps, any> {
    // @todo Define refs for input elements
    nameRef : React.RefObject<HTMLInputElement> = React.createRef();
    starRatingRef : React.RefObject<HTMLInputElement> = React.createRef();
    reviewRef : React.RefObject<HTMLTextAreaElement> = React.createRef();
    titleRef : React.RefObject<HTMLInputElement> = React.createRef();

    constructor( props : RouteComponentProps ) {
        super( props );

        // @todo State for form
        this.state = {
            values: {
                name: 'John',
                starRating: '',
                title: '',
                review: ''
            },
            errors: {
                name: '',
                starRating: '',
                title: '',
                review: ''
            }
        }
    }

    isValid = () => {
        const { name, starRating, title, review } = this.state.values;

        return name !== '' && starRating !== '' && title !== '' && review !== '';
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
        const { name, starRating, title, review } = this.state.values;

        let nameError : string, titleError : string, starRatingError : string, reviewError : string;

        if( name === '' ) {
            nameError = 'Name cannot be empty';
        } else {
            nameError = '';
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
                        name: nameError
                    }
                }
            }
        );
    }

    postReview = ( event : React.FormEvent<HTMLFormElement> ) => {
        // @todo Make an Ajax call to POST /products/:productId/reviews, passing in review details (this.state.values)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1>Post a review for this product</h1>
                    <hr />
                </div>
                <form className="form-horizontal" role="form"onSubmit={this.postReview}>
                    <div className="form-group">
                        <label htmlFor="name" className="control-label">Your name</label>
                        <input type="text" id="name" name="name" className="form-control" ref={this.nameRef} value={this.state.values.name} onChange={this.updateValues} />
                        <div>{this.state.values.name}</div>
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