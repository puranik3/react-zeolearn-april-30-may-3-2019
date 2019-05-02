import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import ProductList from './ProductList';
import { Link } from 'react-router-dom';

export default function App( props : {} ) {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="nav navbar-nav">
                    <Link className="nav-item nav-link" to="/">Awesome Store</Link>
                    <Link className="nav-item nav-link" to="/catalog">Catalog</Link>
                </div>
            </nav>
            <Switch>
                <Route from="/" exact={true} component={About} />
                <Route from="/catalog" component={ProductList} />
            </Switch>
        </React.Fragment>
    );
}