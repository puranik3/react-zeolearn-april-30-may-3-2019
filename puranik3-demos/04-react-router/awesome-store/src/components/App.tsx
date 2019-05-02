import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import PageNotFound from './PageNotFound';
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
            <div className="container">
                <Switch>
                    <Route from="/" exact={true} component={About} />
                    <Route from="/catalog" exact={true} component={ProductList} />
                    <Route from="/catalog/:id" component={ProductDetail} />
                    <Route from="*" component={PageNotFound} />
                </Switch>
            </div>
        </React.Fragment>
    );
}