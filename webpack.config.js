var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var plugins = [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new ExtractTextPlugin({ filename: 'stylesheets/style.css',  allChunks: true })
];

if (process.env.NODE_ENV === 'production') {
    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
    devtool: process.env.NODE_ENV !== 'production' ? 'eval' : null,

    entry: {
        app: './src/client/App.js',
    },

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },

    plugins: plugins,

    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },      {
        test: /\.scss$/,
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }]
      }]
    }
};
