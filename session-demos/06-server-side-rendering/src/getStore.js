import { createStore, combineReducers, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import productListReducer from './reducers/productList';
import productDetailsReducer from './reducers/productDetails';

import thunkMiddleware from 'redux-thunk';

function getStore( initialState, history ) {
    return createStore(
        combineReducers(
            {
                productList: productListReducer,
                productDetails: productDetailsReducer,
                router: connectRouter( history )    
            }
        ),
        initialState,
        applyMiddleware( routerMiddleware( history ), thunkMiddleware )
    );
}

export default getStore;