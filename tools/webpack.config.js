/* eslint-disable no-var, vars-on-top */

var path = require('path');
var appConfig = require('./config');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer-core');
var _ = require('lodash');

function getLoaders(type) {

    var loaders = [
        {
            test: /\.(png|jpeg|jpg|otf|eot|svg|ttf|woff|woff2)$/,
            loader: 'url-loader?limit=100000'
        }
    ];

    if (type === 'hot') {
        loaders.push({
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: [ 'react-hot', 'babel' ]
        });
        loaders.push({
            test: /\.(css)$/,
            loader: [
                'style-loader',
                '!css-loader',
                '?sourceMap&module&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                '!postcss-loader'
            ].join('')
        });
        loaders.push({
            test: /\.(less)$/,
            loader: [
                'style-loader',
                '!css-loader',
                '!less-loader'
            ].join('')
        });
    } else {
        loaders.push({
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        });
        loaders.push({
            test: /\.(css)$/,
            loader: ExtractTextPlugin.extract('style-loader', [
                'css-loader',
                (function cssModulesConfig() {
                    return type === 'prod' ?
                        '?sourceMap&module&importLoaders=1&localIdentName=[hash:base64:7]'
                        :
                        '?sourceMap&module&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]';
                }()),
                '!postcss-loader'
            ].join(''))
        });
        loaders.push({
            test: /\.(less)$/,
            loader: ExtractTextPlugin.extract('style-loader', [
                'css-loader',
                '!less-loader'
            ].join(''))
        });
    }

    return loaders;

}

var defaultConfigSpecifics = {
        entry: path.resolve(__dirname, '../', appConfig.webpack.src),
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin(),
            new ExtractTextPlugin(appConfig.webpack.cssFilename),
            new webpack.DefinePlugin({
                __DEVELOPMENT__: true
            })
        ],
        module: {
            loaders: getLoaders('default')
        }
    };

var prodConfigSpecifics = {
        entry: path.resolve(__dirname, '../', appConfig.webpack.src),
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin(),
            new ExtractTextPlugin(appConfig.webpack.cssFilename),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                },
                __DEVELOPMENT__: false
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ],
        module: {
            loaders: getLoaders('prod')
        }
    };

var hotConfigSpecifics = {
        entry: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            path.resolve(__dirname, '../', appConfig.webpack.src)
        ],
        plugins: [
            new webpack.DefinePlugin({
                __DEVELOPMENT__: true
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ],
        module: {
            loaders: getLoaders('hot')
        }
    };

module.exports = function webpackConfig(type) {

    var debug = type === 'prod' ? false : true;

    var defaultConfig = {

        output: {
            filename: appConfig.webpack.filename,
            path: path.resolve(__dirname, '../', appConfig.webpack.dest),
            sourcePrefix: '  ',
            publicPath: appConfig.webpack.publicPath,
            contentBase: path.resolve(__dirname, '../', appConfig.webpack.contentBase)
        },

        cache: debug,
        debug: debug,
        devtool: debug ? '#inline-source-map' : false,

        stats: {
            colors: true,
            reasons: debug
        },

        resolve: {
            modulesDirectories: ['node_modules', './app'],
            extensions: ['', '.js']
        },

        postcss: [
            require('postcss-nested'),
            require('postcss-simple-vars'),
            require('postcss-simple-extend'),
            require('postcss-custom-selectors'),
            require('postcss-discard-comments'),
            require('postcss-discard-empty'),
            require('postcss-media-minmax'),
            autoprefixer({
                browsers: [
                    'last 2 versions'
                ]
            })
        ]
    };

    var specifics = {
        'dev': defaultConfigSpecifics,
        'prod': prodConfigSpecifics,
        'hot': hotConfigSpecifics
    };

    return _.assign(defaultConfig, specifics[type] ? specifics[type] : defaultConfigSpecifics);

};
