import React, { Component } from 'react';
import StarRating from './StarRating';
import ReviewPanel from '../containers/ReviewPanel'

import { LOADING, FETCHING_PRODUCTS, FETCHED_PRODUCTS, FETCH_PRODUCTS_ERRORED } from '../actions/constants';

class ProductDetail extends Component {
    render() {
        const productId = this.props.match.params.id;
        const product = this.props.items.find(item => String(item.id) === productId) || {};
        let el;
        
        switch( this.props.status ) {
          case LOADING:
            el = (
              <div className="alert alert-info">
                Looking up item details...
              </div>
            );
            break;
          case FETCHING_PRODUCTS:
            el = (
              <div className="alert alert-info">
                Fetching details...
              </div>
            );
            break;
          case FETCHED_PRODUCTS:
            el = (
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
                  <ReviewPanel />

              </div>
            );
            break;
          case FETCH_PRODUCTS_ERRORED:
            el = (
                <div className="alert alert-danger">
                    Oops! Something went wrong while trying to fetch PRODUCTS. ({this.props.error})
                </div>
            )
            break;
          default:
            el = '';
        }

        return <div className="container">{el}</div>
    }
    
    componentDidMount() {
      this.props.fetchProducts();
    }
}

export default ProductDetail;
