import React from 'react';
import { Link } from 'react-router-dom';

import { Product as ProductService } from '../services/Product';
import Product from '../models/Product';

// interface State {
//     status: string,
//     products: Array<Product> | null | []
// }

class ProductList extends React.Component {
    state = {
        status: 'INITIALIZING',
        products: []
    };

    render() {
        const { status, products } = this.state;
        switch( status ) {
            case 'INITIALIZING':
                return (
                    <div className="alert alert-info">
                        Page is being initalized
                    </div>
                );
            case 'LOADING':
                return (
                    <div className="alert alert-info">
                        Products are being fetched. Hang on...
                    </div>
                );
            case 'FETCHED':
                return (
                    <table className="table table-striped table-bordered my-3">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.products && this.state.products.map( product => {
                                    if( product ) {
                                        return <tr>
                                            <td>
                                                <Link to={{ pathname: "/catalog/" + product.id, state: product }}>{product && product.name}</Link>
                                            </td>
                                            <td>{product && product.price}</td>
                                            <td>{product && product.starRating}</td>
                                        </tr>;
                                    } else {
                                        return null;
                                    }
                                })
                            }
                        </tbody>
                    </table>
                );
            case 'FETCH_ERROR':
                return (
                    <div className="alert alert-danger">
                        Some error occured.
                    </div>
                );
        }
    }

    async componentDidMount() {
        let products;

        this.setState({
            status: 'LOADING'
        });

        try {
            products = await ProductService.getProducts();
        } catch( error ) {
            this.setState({
                status: 'FETCH_ERROR'
            });
        }

        this.setState({
            products,
            status: 'FETCHED'
        });
    }
}

export default ProductList;