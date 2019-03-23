import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import About from './About';
import ProductCatalog from '../containers/ProductCatalog';
import ProductDetail from '../containers/ProductDetail';
import ProductAdd from './ProductAdd'

const App = () => {
    return (
        <div>
            <nav className="navbar navbar-default" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Awesome Store</Link>
                    </div>
                
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/catalog">Product Catalog</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route path="/" exact component={About}></Route>
                <Route path="/catalog/add" exact component={ProductAdd}></Route>
                <Route path="/catalog/:id" component={ProductDetail}></Route>
                <Route path="/catalog" component={ProductCatalog}></Route>
            </Switch>
        </div>
    );
};

export default App;
