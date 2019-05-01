import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './components/ProductList';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

// webpack
import 'bootstrap/dist/css/bootstrap.min.css';

const el = <BrowserRouter><App /></BrowserRouter>;
ReactDOM.render( el, document.getElementById( 'root' ) );