import React from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';

import HelloWorld from './components/HelloWorld';

ReactDOM.render( <HelloWorld />, document.getElementById( 'root' ) );

const mergedObj = _.merge( {} , { x: 1 }, { y : 2 } );
console.log( mergedObj );

if( module.hot ) {
    module.hot.accept('./components/HelloWorld.js', function() {
        console.log('Accepting the updated HelloWorld module!');
        ReactDOM.render( <HelloWorld />, document.getElementById( 'root' ) );
    });    
}