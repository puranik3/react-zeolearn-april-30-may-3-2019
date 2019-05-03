const path = require( 'path' );
const webpack = require( 'webpack' );
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    // set up index (index.js and helpers.js) and admin (admin.js) entry points
    
    // set up output - set contenthash/hash on generated bundle
    
    // set up devServer (contentBase, writeToDisk, hot)
    
    // Set up optimization ({ splitChunks : { chunks : 'all' }, usedExports: true })
    
    // Set up babel-loader, style-loader, css-loader, file-loader (for  /\.(png|svg|jpg|gif)$/ and /\.(woff|woff2|eot|ttf|otf)$/), xml-loader

    // Set CleanWebpackPlugin to clean up the dist folder
    // Add HTMLWebPackPlugin (set title and template)
    // Add BundleAnalyzerPlugin
    // Add webpack.HotModuleReplacementPlugin
};