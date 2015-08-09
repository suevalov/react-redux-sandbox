import gulp from 'gulp';
import webpack from 'webpack';
import path from 'path';
import browserSync from 'browser-sync';
import appConfig from '../config';
import autoprefixer from 'autoprefixer-core';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

gulp.task('webpack', function webpackTask(cb) {

    const DEBUG = !global.isProd;
    const watch = DEBUG;

    let started = false;
    const config = {

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

        plugins: (function pluginsCollector() {

            const plugins = [];

            plugins.push(new webpack.optimize.OccurenceOrderPlugin());

            plugins.push(new ExtractTextPlugin('bundle.css'));

            if (DEBUG) {

                plugins.push(
                    new webpack.DefinePlugin({
                        __DEVELOPMENT__: true
                    })
                );

            } else {

                plugins.push(new webpack.DefinePlugin({
                    'process.env': {
                        NODE_ENV: JSON.stringify('production')
                    },
                    __DEVELOPMENT__: false
                }));

                plugins.push(new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false
                    }
                }));

            }

            return plugins;

        }()),

        resolve: {
            modulesDirectories: ['node_modules', './app'],
            extensions: ['', '.js']
        },

        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.(css)$/,
                    loader: ExtractTextPlugin.extract('style-loader', [
                        'css-loader',
                        (function cssModules() {
                            if (DEBUG) {
                                return '?sourceMap&module&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]';
                            }
                            return '?sourceMap&module&importLoaders=1&localIdentName=[hash:base64:7]';
                        }()),
                        '!postcss-loader'
                    ].join(''))
                },
                {
                    test: /\.(less)$/,
                    loader: ExtractTextPlugin.extract('style-loader', [
                        'css-loader',
                        '!less-loader'
                    ].join(''))
                },
                {
                    test: /\.(png|jpeg|jpg|otf|eot|svg|ttf|woff|woff2)$/,
                    loader: 'url-loader?limit=100000'
                }
            ]
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

    const bundler = webpack(config);

    function bundle(err) {
        if (err) {
            throw new Error('Webpack build error');
        }

        if (!started) {
            started = true;
            return cb();
        }

        if (watch && browserSync.active) {
            browserSync.reload({once: true});
        }
    }

    if (watch) {
        bundler.watch(100, bundle);
    } else {
        bundler.run(bundle);
    }

});
