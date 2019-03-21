import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import Counter from './containers/Counter'; 
import Form from './containers/Form'; 

import store from './store';
ReactDOM.render(
    <Provider store={store}>
        {/*<Router>*/}
            <Counter />
            <Form />
        {/*</Router>*/}
    </Provider>,
    document.getElementById( 'root' )
);