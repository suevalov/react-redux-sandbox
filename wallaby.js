/*global wallaby:false*/

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
    }
});

module.exports = function() {

    return {

        files: [
            { pattern: 'node_modules/react-tools/src/test/phantomjs-shims.js', instrument: false },
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
