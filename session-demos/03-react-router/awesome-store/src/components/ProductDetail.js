import React, { Component } from 'react';

const INITIALIZING = 'INITIALIZING', PRODUCTS_AVAILABLE = 'PRODUCTS_AVAILABLE';

class ProductDetail extends Component {
    state = {
        status: INITIALIZING
    };

    render() {
        const productId = this.props.match.params.id;
        const product = this.props.location.state;

        let el;

        switch( this.state.status ) {
            case PRODUCTS_AVAILABLE:
                el = (
                    <div className="container">
                        <h1>{product.name}</h1>
                        <hr />
                        <img src={product.imageUrl} />
                        <p>
                            Product ID: {productId}
                        </p>
                    </div>
                );
                break;
        }

        return el;
    }

    componentDidMount() {
        const productId = this.props.match.params.id;
        const product = this.props.location.state;

        if( productId && product ) {
            this.setState({
                status: PRODUCTS_AVAILABLE,
                productId: productId,
                product: product
            });
        } else {
            // we do Ajax call and set states based on response
        }
    }
}

export default ProductDetail;