import React, { Component } from 'react';

class ReviewProduct extends Component {
  render() {
    return (
      <div className='container'>
        <form onSubmit={this.add}>
          <div className="form-group row">
            <label className="control-label col-3" htmlFor="reviewerName">Your Name</label>
            <div className="col-9">
              <input type="text" className="form-control" name="reviewerName" id="reviewerName" value='' />
            </div>
          </div>
        </form>
      </div>
  )
  }

}

export default ReviewProduct
