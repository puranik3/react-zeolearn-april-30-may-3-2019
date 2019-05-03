import _ from 'lodash';

console.log( 'helper module' );

const mergedObj = _.merge( {} , { x: 1 }, { y : 2 } );
console.log( mergedObj );