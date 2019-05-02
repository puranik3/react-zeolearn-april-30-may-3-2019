import React, { Component } from 'react';

class ReviewsList extends Component {
    render() {
        return (
            <div>
                @todo Show reviews for {this.props.location.state.productId}
            </div>
        );
    }

    componentDidMount() {
        // @todo Make an Ajax call to fetch reviews and set state
    }
}

export default ReviewsList;