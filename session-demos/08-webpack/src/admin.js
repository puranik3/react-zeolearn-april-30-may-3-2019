import _ from 'lodash';

console.log( 'admin module and all its imports here' );

const mergedObj = _.merge( {} , { x: 1 }, { y : 2 } );
console.log( mergedObj );