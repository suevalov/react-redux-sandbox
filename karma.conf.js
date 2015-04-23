module.exports = function(config) {

    config.set({

        browsers: [ 'PhantomJS' ],
        singleRun: true, //just run once by default
        frameworks: [ 'mocha' ], //use the mocha test framework
        files: [
            'test/sinon-1.14.1.js',
            'test/tests.webpack.js'
        ],
        captureTimeout: 60000,
        browserNoActivityTimeout: 100000,
        preprocessors: {
            'test/tests.webpack.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
        },
        webpack: { //kind of a copy of your webpack config
            devtool: 'inline-source-map', //just do inline source maps instead of the default
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader'
                    },
                    {
                        test: /\.less/,
                        loader: 'null-loader'
                    }
                ]
            }
        },
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        }
    });

};
