import React from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import About from './About';
import ProductCatalog from './ProductCatalog';
import ProductDetail from './ProductDetail';

const App = () => {
    const activeStyle = { fontWeight: "bold", backgroundColor: "lightgray", color: 'initial' };

    return (
        <div>
            <nav class="navbar navbar-default" role="navigation">
                <div className="container">
                    <div class="navbar-header">
                        <Link class="navbar-brand" to="/" activeStyle={activeStyle}exact>Awesome Store</Link>
                    </div>
                
                    <div class="collapse navbar-collapse navbar-ex1-collapse">
                        <ul class="nav navbar-nav">
                            <li><NavLink to="/catalog" activeStyle={activeStyle} exact>Product Catalog</NavLink></li>
                            <li><NavLink to="/login" activeStyle={activeStyle} exact>Login</NavLink></li>
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