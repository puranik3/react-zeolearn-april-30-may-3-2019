import React from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';

import HelloWorld from './components/HelloWorld';

const mergedObj = _.merge( {} , { x: 1 }, { y : 2 } );
console.log( mergedObj );

// @todo Check if hot reloading is enabled - if so, accept it and re-render the module
ReactDOM.render( <HelloWorld />, document.getElementById( 'root' ) );