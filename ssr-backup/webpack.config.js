const path = require( 'path' );

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                include: path.resolve( __dirname, 'src' ),
                test: /\.jsx?/
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.json' ]
    },
    mode: 'development'
};