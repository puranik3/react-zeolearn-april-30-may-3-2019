import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from './reducers/counter';
import formReducer from './reducers/form';

const store = createStore(
    combineReducers({
        counter: counterReducer,
        form: formReducer
    })
);

export default store;