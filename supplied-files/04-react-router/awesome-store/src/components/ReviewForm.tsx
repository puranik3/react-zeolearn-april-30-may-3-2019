import React, { Component } from 'react';

class ReviewForm extends React.Component {
    constructor( props ) {
        super( props );

        // @todo State for form

        // @todo Define refs for input elements
    }

    // @todo Define updateValues()

    // @todo Define checkValidity()

    postReview = ( event ) => {
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
                        <input type="text" id="name" name="name" className="form-control" onChange={this.updateValues} ref={this.reviewerRef} value={name} /> {/* in HTML value attribute represents the initial value, in React it refers to the current value */}
                        {
                            name === '' ? (
                                <div style={ { color : 'crimson' } }>
                                    Name is required
                                </div>
                            ) : null
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="price" className="control-label">Price</label>
                        <input type="number" id="price" name="price" className="form-control" onChange={this.updateValues} ref={this.priceRef} value={price} />
                        {
                            price <= 0 ? (
                                <div style={ { color : 'crimson' } }>
                                    Price has to be a positive number
                                </div>
                            ) : null
                        }
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