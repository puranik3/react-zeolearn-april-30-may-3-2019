const path = require( 'path' );
const webpack = require( 'webpack' );
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
        filename: '[name].[hash:8].bundle.js'
    },
    devServer: {
        contentBase: './dist',
        writeToDisk: true,
        hot: true
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        usedExports: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                include: path.resolve( __dirname, 'src' )
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
                include: path.resolve( __dirname, 'src' )
            },
            {
                use: 'file-loader',
                test: /\.(png|svg|jpg|gif)$/
            },
            {
                use: 'file-loader',
                test: /\.(woff|woff2|eot|ttf|otf)$/
            },
            {
                use: 'xml-loader',
                test: /\.xml$/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack Demo App',
            template: path.resolve( __dirname, 'src/index.html' )
        }),
        new BundleAnalyzerPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};