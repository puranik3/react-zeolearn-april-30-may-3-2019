import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import ReviewList from '../containers/ReviewList'

class ReviewPanel extends Component {
  render() {
    return (
      <div className='review-panel'>
        <ul className='nav nav-pills'>
          <li><NavLink activeStyle={{backgroundColor: '#eee'}} exact to={this.props.match.url}>Reviews</NavLink></li>
          <li><NavLink activeStyle={{backgroundColor: '#eee'}} to={this.props.match.url + '/reviews/submit'}>
            Submit a Review</NavLink>
          </li>
        </ul>
        
        <Switch>
          <Route path={this.props.match.url} exact component={ReviewList}></Route>
        </Switch>
      </div>
    )
  }
}

export default ReviewPanel
