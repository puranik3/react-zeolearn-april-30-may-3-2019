import React, { Component } from 'react';

class ProductDetail extends Component {
    render() {
        const productId = this.props.match.params.id;
        const product = this.props.location.state;

        return (
            <div className="container">
                <h1>{product.name}</h1>
                <hr />
                <img src={product.imageUrl} />
                <p>
                    Product ID: {productId}
                </p>
            </div>
        );
    }
}

export default ProductDetail;