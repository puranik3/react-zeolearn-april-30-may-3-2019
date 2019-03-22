import React, { Component } from 'react';
import StarRating from './StarRating';
import { Link } from 'react-router-dom';

class ProductDetail extends Component {
    render() {
        const productId = this.props.match.params.id;
        const product = this.props.location.state;
        console.log(product)

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

                <Link to={this.props.match.url}>Reviews</Link> 
                <Link to={this.props.match.url + '/reviews/submit'}>Submit a Review</Link> 
            </div>
        );
    }
}

export default ProductDetail;
