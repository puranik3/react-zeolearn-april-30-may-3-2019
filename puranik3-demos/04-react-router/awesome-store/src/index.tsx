import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './components/ProductList';
import App from './components/App';
import { Router } from 'react-router-dom';

// webpack
import 'bootstrap/dist/css/bootstrap.min.css';

const el = <Router><App /></Router>;
ReactDOM.render( el, document.getElementById( 'root' ) );