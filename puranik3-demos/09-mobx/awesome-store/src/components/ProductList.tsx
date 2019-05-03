import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { Product as ProductService } from '../services/Product';
import Product from '../models/Product';

interface State {
    status: string,
    products: Array<Product>
}

// @todo Inject store and make this class an observer
class ProductList extends React.Component<RouteComponentProps<any>, State> {
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
                    <React.Fragment>
                        <h3>Catalog</h3>
                        <hr />
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
                                    products.map( ( product : Product ) => {
                                        return <tr>
                                            <td>
                                                <Link to={{ pathname: "/catalog/" + product.id, state: product }}>{product.name}</Link>
                                            </td>
                                            <td>{product.price}</td>
                                            <td>{product.starRating}</td>
                                        </tr>;
                                    })
                                }
                            </tbody>
                        </table>
                    </React.Fragment>
                );
            case 'FETCH_ERROR':
                return (
                    <div className="alert alert-danger">
                        Some error occured.
                    </div>
                );
            default:
                return null;
        }
    }

    async componentDidMount() {
        // @todo Get the store from the state and set the status to 'LOADING'
            
        // @todo Call autorun() to have a function executed after store change - make property changes in a transaction block
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