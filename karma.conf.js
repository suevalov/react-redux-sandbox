/* eslint-disable no-var */

var webpack = require('webpack');

module.exports = function karmaConfigBuilder(config) {

    config.set({

        browsers: [ 'PhantomJS' ],
        singleRun: false,
        frameworks: [ 'jasmine', 'sinon' ], // use the mocha test framework
        files: [
            'test/tests.webpack.js'
        ],
        captureTimeout: 60000,
        browserNoActivityTimeout: 100000,
        preprocessors: {
            'test/tests.webpack.js': [ 'webpack', 'sourcemap' ] // preprocess with webpack and our sourcemap loader
        },
        webpack: { // kind of a copy of your webpack config
            devtool: 'inline-source-map', // just do inline source maps instead of the default
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader'
                    },
                    {
                        test: /\.(less|css)/,
                        loader: 'null-loader'
                    },
                    {
                        test: /\.(png|jpeg|jpg|otf|eot|svg|ttf|woff|woff2)$/,
                        loader: 'null-loader'
                    }
                ]
            },
            plugins: [
                new webpack.DefinePlugin({
                    __DEVELOPMENT__: false
                })
            ],
            resolve: {
                modulesDirectories: [ 'node_modules', './app' ],
                extensions: [ '', '.js' ]
            }
        },
        webpackServer: {
            noInfo: true // please don't spam the console when running in karma!
        }
    });

};
