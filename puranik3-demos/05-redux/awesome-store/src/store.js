import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import productsReducer from './reducers/productsReducer';

const store = createStore( productsReducer, applyMiddleware( logger, thunk ) );

export default store;