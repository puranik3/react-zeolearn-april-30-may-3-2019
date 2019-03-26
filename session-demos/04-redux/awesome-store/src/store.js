import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productsReducer } from './reducers/products.js'
import { reviewsReducer } from './reducers/reviews.js'

export const store = createStore(
    combineReducers({
        products: productsReducer,
        reviews: reviewsReducer
    }),
    composeWithDevTools( applyMiddleware( logger, thunk ) )
);
