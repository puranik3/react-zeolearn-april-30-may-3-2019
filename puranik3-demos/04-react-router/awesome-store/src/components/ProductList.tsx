import React from 'react';
import { Product as ProductService } from '../services/Product';
import Product from '../models/Product';

interface State {
    status: string,
    products: Array<Product>
}

class ProductList extends React.Component<{}, State> {
    state : State = {
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
                return this.state.products.map( product => <div>{product.name}</div> );
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