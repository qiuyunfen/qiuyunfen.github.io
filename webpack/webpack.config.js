var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, '../src', 'index.js')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    module: {
        loaders: [
        	{ test: /\.(jpg|png)$/, loader: "url?limit=8192"},
        	{ test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
            { test: /\.css?$/, loaders: ['style', 'raw'] }
            
        ]
    },
    resolve: {
        extensions: ['', '.js']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('style.css', { allChunks: true }),
        new webpack.NoErrorsPlugin()
    ]
};