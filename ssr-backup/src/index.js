import ReactDOM from 'react-dom';
import render from './render';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const initialState = {
    productList: { status: null, products: [], error: null },
    productDetails: { status: null, product: {}, error: null }
};

render( ReactDOM.render, initialState, history, document.getElementById( 'root' ) );