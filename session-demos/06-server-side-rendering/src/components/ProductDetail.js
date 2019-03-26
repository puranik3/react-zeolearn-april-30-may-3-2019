import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchProductDetailsThunk } from '../actions/creators';
import ActionConstants from '../actions/constants';

export default class ProductDetail extends Component {
    componentDidMount() {
        const productId = this.props.match.params.id;

        this.props.dispatch( fetchProductDetailsThunk( productId ) );
    }

    render() {
        let el;

        const { product, status } = this.props;
        const { name, description, price, starRating, code, releaseDate, imageUrl } = product;

        switch( status ) {
            case ActionConstants.FETCH_PRODUCT_DETAILS:
                el = (
                    <div>
                        Fetching details for product [id={this.props.match.params.id}]
                    </div>
                );
                break;
            case ActionConstants.FETCH_PRODUCT_DETAILS_SUCCESS:
                el = (
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h3>{name}</h3>
                            <br />
                            <p>
                                <img src={imageUrl} class="center-block img-responsive" />
                                {description}
                            </p>
                        </div>
                    </div>
                )
                break;
            default:
                el = (
                    <div>
                        Initializing details of product...
                    </div>
                );
        }

        return (
            <div>
                <h1>{product.name || null}</h1>
                <hr />
                {el}
                <Link to="/products">Back to catalog</Link>
            </div>
        )
    }
}