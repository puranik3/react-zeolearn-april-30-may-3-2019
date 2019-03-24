import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import ReviewList from '../containers/ReviewList'
import ReviewProduct from '../containers/ReviewProduct'

class ReviewPanel extends Component {
  render() {
    console.log('ReviewPanel this.props.match: ', this.props.match)
    return (
      <div className='review-panel' style={{marginTop: '2em'}}>
        <ul className='nav nav-pills'>
          <li><NavLink activeStyle={{backgroundColor: '#eee'}} exact to={this.props.match.url}>Reviews</NavLink></li>
          <li><NavLink activeStyle={{backgroundColor: '#eee'}} to={this.props.match.url + '/reviews/submit'}>
            Submit a Review</NavLink>
          </li>
        </ul>
        
        <Switch>
          <Route path={this.props.match.path} exact component={ReviewList}></Route>
          <Route path={this.props.match.path + '/reviews/submit/'} exact component={ReviewProduct}></Route>
        </Switch>
      </div>
    )
  }
}

export default ReviewPanel
