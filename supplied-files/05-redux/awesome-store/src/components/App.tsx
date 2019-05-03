import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import About from './About';
import ProductList from '../containers/ProductList';
import ProductDetail from './ProductDetail';
import PageNotFound from './PageNotFound';

export default function App( props : {} ) {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="container px-3">
                    <div className="nav navbar-nav">
                        <NavLink className="nav-item nav-link" activeClassName="active" exact to="/">Awesome Store</NavLink>
                        <NavLink className="nav-item nav-link" activeClassName="active" exact to="/catalog">Catalog</NavLink>
                    </div>
                </div>
            </nav>
            <div className="container my-3">
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