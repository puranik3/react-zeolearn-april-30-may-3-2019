import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import About from './About';
import ProductCatalog from './ProductCatalog';
import ProductDetail from './ProductDetail';

const App = () => {
    return (
        <div>
            <nav class="navbar navbar-default" role="navigation">
                <div className="container">
                    <div class="navbar-header">
                        <Link class="navbar-brand" to="/">Awesome Store</Link>
                    </div>
                
                    <div class="collapse navbar-collapse navbar-ex1-collapse">
                        <ul class="nav navbar-nav">
                            <li><Link to="/catalog">Product Catalog</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route path="/" exact component={About}></Route>
                <Route path="/catalog/:id" component={ProductDetail}></Route>
                <Route path="/catalog" component={ProductCatalog}></Route>
            </Switch>
        </div>
    );
};

export default App;