import React from 'react';
import ReactDOM from 'react-dom';
import { Product as ProductService, Product } from '../services/Product';

class ProductList extends React.Component {
    render() {

    }

    async componentDidMount() {
        const products = await Product.getProducts();

        
    }
}