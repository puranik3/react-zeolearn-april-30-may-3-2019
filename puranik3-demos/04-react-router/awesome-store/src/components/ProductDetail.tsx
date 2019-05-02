import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import Product from '../models/Product';
import { Product as ProductService } from '../services/Product';

interface State {
    status: string,
    product: Product | null
}

class ProductDetail extends Component<RouteComponentProps<any>, State> {
    // @todo Set state with status, product and error properties
    state : State = {
        status: 'INITIALIZING_DETAILS',
        product: null
    };

    render() {

        // @todo To be set from the URL param
        const productId = this.props.match.params.id;
        
        // @todo To be set from state passed in location object
        const product = this.state.product;

        let el;

        switch( this.state.status ) {
            case 'INITIALIZING_DETAILS':
                el = (
                    <div className="alert alert-info">
                        Page is being initalized
                    </div>
                );
                break;
            case 'LOADING':
                el = (
                    <div className="alert alert-info">
                        Products details are being fetched. Hang on...
                    </div>
                );
                break;
            case 'FETCHED_PRODUCT_DETAILS':
                el = (
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>{product && product.name}</h1>
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img src={product && product.imageUrl || ''} className="img-fluid" />
                            </div>
                            <div className="col">
                                <p>
                                    Product ID: {productId}
                                </p>
                                <p>
                                    {product && product.description}
                                </p>
                                <p className="mt-3">
                                    Price: ${product && product.price}
                                </p>
                                <p>
                                    Rating: {product && product.starRating} / 5
                                </p>
                            </div>
                        </div>
                        
                        <nav className="nav nav-tabs nav-stacked">
                            {/* Tip: Pass in product id as state to linked component*/}
                            <a className="nav-link active" href="">@todo Link to Reviews</a>
                            <a className="nav-link" href="">@todo Link to Post a Review</a>
                        </nav>
                        
                        @todo Add Routes to both components
                    </div>
                );
                break;
            case 'FETCH_ERROR_PRODUCT_DETAILS':
                el = (
                    <div className="alert alert-danger">
                        Some error occured.
                    </div>
                );
        }

        return el;
    }

    async componentDidMount() {
        // @todo To be set from the URL param
        const productId = this.props.match.params.id;
        
        // @todo To be set from state passed in location object
        let product = this.props.location.state;
        
        if( product ) {
            this.setState({
                status: 'FETCHED_PRODUCT_DETAILS',
                product: product
            });
        } else {
            product = await ProductService.getProduct( productId );
            this.setState({
                status: 'FETCHED_PRODUCT_DETAILS',
                product: product
            });
        }

        // @todo
        // Case a) If product details are available, then set state, else...
        // Case b) We do an Ajax call and set states based on response
    }
}

export default ProductDetail;