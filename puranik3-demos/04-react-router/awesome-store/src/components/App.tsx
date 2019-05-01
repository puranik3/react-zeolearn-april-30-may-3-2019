import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import ProductList from './ProductList';

export default function App( props : {} ) {
    return (
        <React.Fragment>
            <Route from="/" component={About} />
            <Route from="/catalog" component={ProductList} />
        </React.Fragment>
    );
}