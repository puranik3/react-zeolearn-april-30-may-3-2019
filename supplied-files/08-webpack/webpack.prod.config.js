/**
 * This shall have configurations for your production build
 */
const path = require( 'path' );
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    entry: {
        "index": [
            './src/index.js',
            "./src/helpers.js"
        ],
        "admin": "./src/admin.js"
    },
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: '[name].[contenthash:8].bundle.js'
    },
    // set up babel loader
    
    // Set CleanWebpackPlugin to clean up the dist folder
    // Add HTMLWebPackPlugin (set title and template)
};