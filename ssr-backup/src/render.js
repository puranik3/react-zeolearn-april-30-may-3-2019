import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import getStore from "./getStore";
import App from './containers/App';
import { Provider } from 'react-redux';

function render( renderer, initialState, history, root ) {
    const store = getStore( initialState, history );
    
    return renderer(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>,
        root
    );
}

export default render;