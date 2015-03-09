'use strict';

var _ = require('lodash');
var webpack = require('webpack');
var argv = require('minimist')(process.argv.slice(2));

var DEBUG = !argv.release;

var GLOBALS = {
    'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
    '__DEV__': DEBUG
};

var AUTOPREFIXER_LOADER = 'autoprefixer-loader?{browsers:[' +
    '"Android 2.3", "Android >= 4", "Chrome >= 20", "Firefox >= 24", ' +
    '"Explorer >= 8", "iOS >= 6", "Opera >= 12", "Safari >= 6"]}';

var config = {

    cache: DEBUG,
    debug: DEBUG,
    devtool: DEBUG ? 'eval': false,

    output: {
        path: './build/',
        publicPath: './build/',
        sourcePrefix: '  '
    },

    stats: {
        colors: true,
        reasons: DEBUG
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

var appConfig = _.merge({}, config, {
    entry: './app/main.js',
    output: {
        filename: 'app.js'
    },
    plugins: config.plugins.concat([
            new webpack.DefinePlugin(_.merge(GLOBALS, {'__SERVER__': false}))
        ].concat(DEBUG ? [] : [
                new webpack.optimize.DedupePlugin(),
                new webpack.optimize.UglifyJsPlugin(),
                new webpack.optimize.AggressiveMergingPlugin()
            ])
    )
});

var serverConfig = _.merge({}, config, {
    entry: './app/server.js',
    output: {
        filename: 'server.js',
        libraryTarget: 'commonjs2'
    },
    target: 'node',
    externals: /^[a-z\-0-9]+$/,
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false
    },
    plugins: config.plugins.concat(
        new webpack.DefinePlugin(_.merge(GLOBALS, {'__SERVER__': true}))
    ),
    module: {
        loaders: config.module.loaders.map(function(loader) {
            // Remove style-loader
            return _.merge(loader, {
                loader: loader.loader = loader.loader.replace('style-loader!', '')
            });
        })
    }
});

module.exports = [appConfig, serverConfig];
