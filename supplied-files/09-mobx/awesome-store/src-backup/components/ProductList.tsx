import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { Product as ProductService } from '../services/Product';
import Product from '../models/Product';


import { observer, inject } from 'mobx-react';
import { autorun, transaction } from 'mobx';

interface State {
    status: string,
    products: Array<Product>
}

@inject('store')
@observer
class ProductList extends React.Component<RouteComponentProps<any> & { store : any }, State> {
    render() {
        const { status, products } = this.props.store;

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
                                                <Link to={"/catalog/" + product.id}>{product.name}</Link>
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
        const productStore = this.props.store;
        productStore.status = 'LOADING';
            
        // function passed to autonrun will execute after store change
        autorun(async () => {
            if( productStore.status === 'LOADING' ) {
                try {
                    const products = await ProductService.getProducts();
                    transaction(() => {
                        console.log( 'inside sucess transaction' );
                        
                        productStore.status = 'FETCHED';
                        productStore.products = products;
                        productStore.error = null;
                    });
                } catch( error ) {
                    transaction(() => {
                        productStore.status = 'FETCH_ERROR';
                        productStore.products = [];
                        productStore.error = error;
                    });
                }
            }
        });
    }
}

export default ProductList;