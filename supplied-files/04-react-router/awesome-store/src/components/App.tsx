import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import ProductList from './ProductList';

export default function App( props : {} ) {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="nav navbar-nav">
                    <a className="nav-item nav-link" href="/">Awesome Store</a>
                    <a className="nav-item nav-link" href="/catalog">Catalog</a>
                </div>
            </nav>
            <Switch>
                <Route from="/" exact={true} component={About} />
                <Route from="/catalog" component={ProductList} />
            </Switch>
        </React.Fragment>
    );
}