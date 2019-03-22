import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import ProductList from '../containers/ProductList';
import ProductDetail from '../containers/ProductDetail';

// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default" role="navigation">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Awesome store</Link>
          </div>
          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav">
              <Link to="/products">Store Catalog</Link>
            </ul>
          </div>
        </nav>
        
        <div className="container">
            <Switch>
                <Route path="/products" component={ProductList} exact={true} />
                <Route path="/products/:id" component={ProductDetail} />
            </Switch>
        </div>
      </div>
    );
  }
}

export default App;
