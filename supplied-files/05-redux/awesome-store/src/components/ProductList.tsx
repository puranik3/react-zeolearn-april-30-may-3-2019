import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Product from '../models/Product';

import { fetchProductsThunk } from '../actions/creators';

class ProductList extends React.Component<RouteComponentProps<any> & ReturnType<any> & { products : any, error : Error }, {}> {
    render() {
        const { products, error } = this.props;

        let status = 'LOADING';
        if( products && products.length > 0 ) {
            status = 'FETCHED';
        } else if( error ) {
            status = 'FETCH_ERROR'
        }

        switch( status ) {
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
        this.props.dispatch( fetchProductsThunk() );
    }
}

export default ProductList;