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
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                include: path.resolve( __dirname, 'src' )
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack Demo App',
            template: path.resolve( __dirname, 'src/index.html' )
        })
    ]
};