var path = require('path');
var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var assetsPath = path.join(__dirname, '..', 'dist');
var projectRootPath = path.join(__dirname, '../');

module.exports = {
    devtool: 'false',
    entry: {
        main: [
           path.join(__dirname, '../src', 'index.js')
        ],
        vendor: ['react', 'react-dom', 'redux', 'react-redux', 'immutable', 'history', 'react-router']
    },
    output: {
        path: assetsPath,
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            { test: /\.css?$/, loader: ExtractTextPlugin.extract('style', 'raw') },
            { test: /\.(jpg|png)$/, loader: "url?limit=8192"}
        ]
    },
    resolve: {
        extensions: ['', '.js']
    },
    plugins: [
        new CleanPlugin([assetsPath], { root: projectRootPath }),//删除目标文件夹
        new webpack.optimize.OccurenceOrderPlugin(),//模块去重
        //CommonsChunkPlugin：用于提取多个入口文件的公共脚本部分，然后生成一个 common.js 来方便多页面之间进行复用
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js'),//捆绑第三方库文件
        new ExtractTextPlugin('[name].css', { allChunks: true }),//合并sass和css文件为一个css文件
        new webpack.DefinePlugin({//加入这个避免redux报错
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.NoErrorsPlugin()
    ]
};