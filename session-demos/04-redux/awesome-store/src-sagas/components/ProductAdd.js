import React, { Component } from 'react';
const axios = require('axios')

class ProductAdd extends Component {

    constructor( props ) {
      super( props )    
      
      this.state = {
        values: {
          productName: '',
          description: '',
          price: '',
          releaseDate: '',
          starRating: 0,
        },
      }
    }

    updateValues = ( event ) => {
      const name = event.target.name;
      const value = event.target.value;

      this.setState(
        curState => ({
          error: { ...curState.error },
          values: {
            ...curState.values,
            [name]: value
          }
        }),
      )
    }

    render() {
      return (
          <div className="container">
          {console.log(this.state)}
            <form onSubmit={this.add}>
              <div className="form-group row">
                <label className="control-label col-3" htmlFor="productName">Product Name</label>
                <div className="col-9">
                  <input type="text" className="form-control" name="productName" id="productName" value={this.state.values.name} onChange={this.updateValues.bind(this)} />
                </div>
              </div>
              <div className="form-group row">
                <label className="control-label col-3" htmlFor="description">Product Description</label>
                <div className="col-9">
                  <input type="text" className="form-control" name="description" id="description" value={this.state.values.description} onChange={this.updateValues} />
                </div>
              </div>
              <div className="form-group row">
                <label className="control-label col-3" htmlFor="price">Price</label>
                <div className="col-9">
                  <input type="text" className="form-control" name="price" id="price" value={this.state.values.price} onChange={this.updateValues} />
                </div>
              </div>
              <div className="form-group row">
                <label className="control-label col-3" htmlFor="releaseDate">Release Date</label>
                <div className="col-9">
                  <input type="text" className="form-control" name="releaseDate" id="releaseDate" value={this.state.values.releaseDate} onChange={this.updateValues} />
                </div>
              </div>
              <div className="form-group row">
                <label className="control-label col-3" htmlFor="starRating">Star Rating</label>
                <div className="col-9">
                  <input type="text" className="form-control" name="starRating" id="starRating" value={this.state.values.starRating} onChange={this.updateValues} />
                </div>
              </div>
              <div className="form-group row">
                <div className="offset-col-3 col-9">
                  <input type="submit" value="Add Product" className="btn btn-primary" />
                </div>
              </div>
            </form>
          </div>
      );
    }

    add = ( event ) => {
        event.preventDefault();
      
        const newProduct = {
            "name": this.state.values.name,
            "code": "ONE-6",
            "releaseDate": this.state.values.releaseDate,
            "description": this.state.values.description,
            "price": this.state.values.price,
            "starRating": this.state.values.starRating,
            "imageUrl": ""
        }
        console.log(newProduct)
        
        axios.post( 'https://awesome-store-server.herokuapp.com/products', newProduct )
        .then(function( response ) {
            console.log( response.data );
        })
        .catch(function( error ) {
            console.log( error.message );
        });
    }
}

export default ProductAdd
