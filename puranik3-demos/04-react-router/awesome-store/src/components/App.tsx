import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import ProductList from './ProductList';

export default function App( props : {} ) {
    return (
        <React.Fragment>
            <Switch>
                <Route from="/" exact={true} component={About} />
                <Route from="/catalog" component={ProductList} />
            </Switch>
        </React.Fragment>
    );
}