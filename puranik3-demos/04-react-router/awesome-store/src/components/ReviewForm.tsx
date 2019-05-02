import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';

class ReviewForm extends React.Component<RouteComponentProps, {}> {
    state = {}

    constructor( props : RouteComponentProps ) {
        super( props );

        // @todo State for form

        // @todo Define refs for input elements
    }

    // @todo Define updateValues()

    // @todo Define checkValidity()

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
                <form className="form-horizontal" role="form">
                    <div className="form-group">
                        <label htmlFor="name" className="control-label">Your name</label>
                        <input type="text" id="name" name="name" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="starRating" className="control-label">Rating</label>
                        <input type="text" id="starRating" name="starRating" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title" className="control-label">Title</label>
                        <input type="text" id="title" name="title" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="review" className="control-label">Review</label>
                        <textarea id="review" name="review" className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Post review</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ReviewForm;