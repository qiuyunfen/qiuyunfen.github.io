import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
	entry: [
		'webpack-hot-middleware/client?reload=true',
		path.join(__dirname, '../src', 'index.js')
	],
	output: {
		path: '/',
		filename: 'bundle.js',
		publicPath: '/assets/'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
            { test: /\.css?$/, loaders: ['style', 'raw'] },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!sass') },
            { test: /\.jpg|png$/, loader: 'url?limit=10000' }
		]
	},
	resolve: {
		extensions: ['', '.js']
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin('style.css', { allChunks: true }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
	]
};