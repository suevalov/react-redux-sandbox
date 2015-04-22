'use strict';

var gulp = require('gulp');
var webpack = require('webpack');
var path = require('path');
var browserSync = require('browser-sync');
var appConfig = require('../config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var AUTOPREFIXER_LOADER = 'autoprefixer-loader?{browsers:[' +
    '"Android 2.3", "Android >= 4", "Chrome >= 20", "Firefox >= 24", ' +
    '"Explorer >= 8", "iOS >= 6", "Opera >= 12", "Safari >= 6"]}';

gulp.task('webpack', function(cb) {

    var DEBUG = !global.isProd;
    var watch = DEBUG;

    var started = false;
    var config = {

        entry: path.resolve(__dirname, '../..', appConfig.webpack.src),

        output: {
            filename: appConfig.webpack.filename,
            path: path.resolve(__dirname, '../..', appConfig.webpack.dest),
            sourcePrefix: '  '
        },

        cache: DEBUG,
        debug: DEBUG,
        devtool: DEBUG ? '#inline-source-map' : false,

        stats: {
            colors: true,
            reasons: DEBUG
        },

        plugins: (function() {

            var plugins = [];

            plugins.push(new webpack.optimize.OccurenceOrderPlugin());

            plugins.push(new ExtractTextPlugin('bundle.css'));

            if (!DEBUG) {

                plugins.push(new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false
                    }
                }));

            }

            return plugins;

        }()),

        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader?experimental'
                },
                {
                    test: /\.(less|css)$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!' + AUTOPREFIXER_LOADER + '!less-loader')
                }
                //{
                //    test: /\.png/,
                //    loader: 'url-loader?limit=10000&mimetype=image/png'
                //},
                //{
                //    test: /\.jpg/,
                //    loader: 'url-loader?limit=10000&mimetype=image/jpg'
                //},
                //{
                //    test: /\.(otf|eot|svg|ttf|woff)$/,
                //    loader: 'url-loader?limit=8192'
                //}
            ]
        }

    };
    var bundler = webpack(config);

    function bundle(err) {
        if (err) {
            throw new Error('Webpack build error');
        }

        if (!started) {
            started = true;

            return cb();
        } else {
            if (watch && browserSync.active) {
                browserSync.reload({once: true});
            }
        }
    }

    if (watch) {
        bundler.watch(100, bundle);
    } else {
        bundler.run(bundle);
    }

});
