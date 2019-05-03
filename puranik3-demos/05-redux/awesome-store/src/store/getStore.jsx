import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import productsReducer from '../reducers/productsReducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const getStore = ( initialState ) => {
    let store;
    
    if( initialState ) {
        store = createStore(
            combineReducers({
                products: productsReducer
            }),
            initialState,
            composeWithDevTools( applyMiddleware( logger, thunk ) )
        );
    } else {
        store = createStore(
            combineReducers({
                products: productsReducer
            }),
            composeWithDevTools( applyMiddleware( logger, thunk ) )
        );
    }

    return store;
};

export default getStore;