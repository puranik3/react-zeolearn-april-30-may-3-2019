import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchProductsThunk } from '../actions/creators';
import ActionConstants from '../actions/constants';

export default class ProductList extends Component {
    componentDidMount() {
        this.props.dispatch( fetchProductsThunk() )
    }

    render() {
        const { status, products, error } = this.props;
        let el;

        switch( status ) {
            case ActionConstants.FETCH_PRODUCTS:
                el = (
                    <div>
                        Fetching products...
                    </div>
                );
                break;
            case ActionConstants.FETCH_PRODUCTS_SUCCESS:
                el = (
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Code</th>
                                <th>Rating</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(product => (
                                    <tr>
                                        <td>
                                            <img src={product.imageUrl} style={ { width: '32px' } } />
                                        </td>
                                        <td>
                                            <Link to={`/products/${product.id}`}>{product.name}</Link>
                                        </td>
                                        <td>{product.description}</td>
                                        <td>{product.code}</td>
                                        <td>{product.starRating}</td>
                                        <td>{product.price}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                );
                break;
            case ActionConstants.FETCH_PRODUCTS_ERROR:
                el = (
                    <div>
                        Some error occured while fetching products
                    </div>
                )
                break;
            default:
                el = (
                    <div>
                        Initializing...
                    </div>
                );
        }

        return (
            <div>
                <h1>Store catalog</h1>
                <hr />
                {el}
            </div>
        );
    }
}