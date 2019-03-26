import express from 'express';
import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config';
import ActionConstants from './src/actions/constants';
import { renderToString } from 'react-dom/server';
import { createMemoryHistory } from 'history';
import render from './src/render';

const products = require( './data/products.json' );
const reviews = require( './data/reviews.json' );

const app = express();

const compiler = webpack( webpackConfig );

app.use( webpackDevMiddleware( compiler ) );

app.use( express.json() ); // enables accepting JSON in request body
app.use( express.urlencoded() ); // enables accepting form data in request body

function sendRenderedHtml( req, res, next, initialState ) {
    fs.readFile( path.resolve( __dirname, 'public/index.html' ), 'utf-8', function( err, fileData ) {
        if( err ) {
            return next( err );
        }

        const history = createMemoryHistory({
            initialEntries: [ req.path ]
        });

        const renderedHtml = render( renderToString, initialState, history );
        fileData = fileData.replace( '<%= preloadedApp %>', renderedHtml );
        res.send( fileData );
    });
}

app.get( '/', function( req, res, next ) {
    const initialState = {
        productList: { status: null, products: [], error: null },
        productDetails: { status: null, product: {}, error: null }
    };

    sendRenderedHtml( req, res, next, initialState );
});

app.get( '/products', function( req, res, next ) {
    const initialState = {
        productList: { status: ActionConstants.FETCH_PRODUCTS_SUCCESS, products: products, error: null },
        productDetails: { status: null, product: {}, error: null }
    };

    sendRenderedHtml( req, res, next, initialState );
});

app.get( '/products/:id', function( req, res, next ) {
    const id = +req.params.id;

    const initialState = {
        productList: { status: null, products: [], error: null },
        productDetails: {
            status: ActionConstants.FETCH_PRODUCT_DETAILS_SUCCESS,
            product: products.find( product => product.id === id ),
            error: null
        }
    };

    sendRenderedHtml( req, res, next, initialState );
});

app.use( express.static( path.resolve( __dirname, 'public' ) ) );

// error handling middleware
app.use(function( req, res, next ) {
    res.sendFile( path.resolve( __dirname, 'public/404.html' ) );
});

app.use(function( err, req, res, next ) {
    res.status( 500 ).sendFile( path.resolve( __dirname, 'public/500.html' ) );
});

app.listen( 3000 );