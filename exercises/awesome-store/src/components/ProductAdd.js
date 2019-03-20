import React, { Component } from 'react';

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
            <form onSubmit={this.login}>
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
}

export default ProductAdd
