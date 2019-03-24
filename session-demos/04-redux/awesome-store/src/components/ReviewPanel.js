import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import ReviewList from '../components/ReviewList'

class ReviewPanel extends Component {
  render() {
    console.log('this: ', this)
    return (
      <div className='review-panel'>
        <ul className='nav nav-pills'>
          {/*<li><NavLink activeStyle={{fontSize: '2em'}} exact to={this.props.match.url}>Reviews</NavLink></li>*/}
          {/*<li><NavLink to={this.props.match.url + '/reviews/submit'}>Submit a Review</NavLink></li>*/}
          <li><Link to='/'>Yolo</Link></li>
        </ul>
        
        <Switch>
          <Route path='/' component={ReviewList}></Route>
        </Switch>
      </div>
    )
  }
}

export default ReviewPanel
