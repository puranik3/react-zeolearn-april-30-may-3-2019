import React, { Component } from 'react';

class ProductAdd extends Component {

    constructor( props ) {
      super( props )    
      
      this.state = {
        values: {
          name: '',
          description: '',
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
          <div>{this.state.values.name}</div>
            <form onSubmit={this.login}>
              <div className="form-group row">
                <label className="control-label col-3" htmlFor="productName">Product Name</label>
                <div className="col-9">
                  <input type="text" className="form-control" name="product-name" id="productName" value={this.state.values.name} onChange={this.updateValues} />
                </div>
              </div>
              <div className="form-group row">
                <label className="control-label col-3" htmlFor="password">Product Description</label>
                <div className="col-9">
                  <input type="text" className="form-control" name="password" id="password" value={this.state.values.description} onChange={this.updateValues} />
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
