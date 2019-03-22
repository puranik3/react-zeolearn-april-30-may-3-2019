import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productsReducer } from './reducers/products.js'

export const store = createStore(
    combineReducers({
        products: productsReducer
    }),
    applyMiddleware( thunk )
);
