import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import getStore from './store/getStore';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = getStore();

ReactDOM.render( 
    <Provider store={store}>
        <BrowserRouter>
            <App />        
        </BrowserRouter>
    </Provider>,
    document.getElementById( 'root' )
);