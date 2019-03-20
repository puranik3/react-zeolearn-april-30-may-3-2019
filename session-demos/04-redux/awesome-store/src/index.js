import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
ReactDOM.render( <Provider store={store}>
    <Counter />
    <Form />
</Provider>, document.getElementById( 'root' ) );