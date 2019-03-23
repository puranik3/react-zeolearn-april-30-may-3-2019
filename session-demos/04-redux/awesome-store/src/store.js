import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productsReducer } from './reducers/products.js'

export const store = createStore(
    combineReducers({
        products: productsReducer
    }),
    composeWithDevTools( applyMiddleware( logger, thunk ) )
);
