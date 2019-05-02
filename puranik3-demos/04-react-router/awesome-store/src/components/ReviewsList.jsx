import React, { Component } from 'react';

class ReviewsList extends Component {
    render() {
        alert( this.props.location.state );
        return (
            <div>
                @todo Show reviews for {this.props.location.state}
            </div>
        );
    }

    componentDidMount() {
        // @todo Make an Ajax call to fetch reviews and set state
    }
}

export default ReviewsList;