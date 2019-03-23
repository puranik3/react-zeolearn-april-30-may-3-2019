import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productsReducer } from './reducers/products.js'
import { productReducer } from './reducers/product.js'
import { watchProductsFetch } from './sagas/productsFetch';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    combineReducers({
        products: productsReducer,
        product: productReducer
    }),
    composeWithDevTools( applyMiddleware( logger, sagaMiddleware ) )
);

sagaMiddleware.run( watchProductsFetch );
