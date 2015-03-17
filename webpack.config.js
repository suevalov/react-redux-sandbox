'use strict';

var _ = require('lodash');
var webpack = require('webpack');

var AUTOPREFIXER_LOADER = 'autoprefixer-loader?{browsers:[' +
    '"Android 2.3", "Android >= 4", "Chrome >= 20", "Firefox >= 24", ' +
    '"Explorer >= 8", "iOS >= 6", "Opera >= 12", "Safari >= 6"]}';

module.exports = {

    entry: [
      './app/main.js',
      'webpack-dev-server/client?http://localhost:8081'
    ],

    output: {
        path: '/build/',
        publicPath: "http://localhost:8081/assets/",
        filename: 'app.js'
    },

    stats: {
        colors: true
    },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jsxhint'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?experimental'
            },
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!' + AUTOPREFIXER_LOADER + '!less-loader'
            },
            {
                test: /\.png/,
                loader: 'url-loader?limit=10000&mimetype=image/png'
            },
            {
                test: /\.jpg/,
                loader: 'url-loader?limit=10000&mimetype=image/jpg'
            },
            {
                test: /\.svg/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin()
    ]

};
