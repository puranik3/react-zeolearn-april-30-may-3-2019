import React, { Component } from 'react';
import StarRating from './StarRating';
import { Link, Switch, Route } from 'react-router-dom';
import ProductReviews from '../containers/ProductReviews';

class ProductDetail extends Component {
  render() {
    const productId = this.props.match.params.id;
    const product = this.props.location.state;

    return (
      <div className="container">
        <h1>{product.name}</h1>
        <hr />
        <div className="row">
          <div className="col-sm-4">
            <img alt={product.name} src={product.imageUrl} className="img-fluid rounded float-left" />
          </div>
          <div className="col-sm-8">
            <div style={{fontSize: '1.6em'}}><StarRating rating={product.starRating} total={5} /></div>
            <p>Product ID: {productId}</p>
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Release Date: {product.releaseDate}</p>
          </div>
        </div>

        <ul class='nav nav-pills'>
          <li role='presentation'><Link to={this.props.match.url}>Reviews</Link></li>
          <li role='presentation'><Link to={this.props.match.url + '/reviews/submit'}>Submit a Review</Link></li>
        </ul>
        <Switch>
          <Route path='/' component={ProductReviews}></Route>
        </Switch>
      </div>
    );
  }
}

export default ProductDetail;
