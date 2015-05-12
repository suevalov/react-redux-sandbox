/*global wallaby*/

'use strict';

var wallabyWebpack = require('wallaby-webpack');

var wallabyPostprocessor = wallabyWebpack({
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
    },
    resolve: {
        modulesDirectories: [ 'node_modules', './app' ],
        extensions: [ '', '.js' ]
    }
});

module.exports = function() {

    return {

        files: [
            { pattern: 'node_modules/react-tools/src/test/phantomjs-shims.js', instrument: false },
            { pattern: 'test/sinon-1.14.1.js', load: true },
            { pattern: 'app/**/*.js', load: false },
            { pattern: 'app/**/*.less', load: false },
            { pattern: 'app/**/__tests__/*-test.js', ignore: true }
        ],

        tests: [
            { pattern: 'app/**/__tests__/*-test.js', load: false }
        ],

        postprocessor: wallabyPostprocessor,

        testFramework: 'mocha@2.2.4',

        bootstrap: function() {
            var mocha = wallaby.testFramework;
            mocha.ui('bdd');
            window.__moduleBundler.loadTests();
        }

    };

};
