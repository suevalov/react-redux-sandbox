var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');
var path = require('path');

module.exports = {

    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, '../../app', 'main.js')
    ],

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/',
        contentBase: __dirname
    },

    cache: true,
    debug: true,
    devtool: '#inline-source-map',

    stats: {
        colors: true,
        reasons: true
    },

    plugins: [
        new webpack.DefinePlugin({
            __DEVELOPMENT__: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    resolve: {
        modulesDirectories: ['node_modules', path.resolve(__dirname, '../..', 'app')],
        extensions: ['', '.js']
    },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [ 'react-hot', 'babel' ]
            },
            {
                test: /\.(css)$/,
                loader: [
                    'style-loader',
                    '!css-loader',
                    '?sourceMap&module&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    '!postcss-loader'
                ].join('')
            },
            {
                test: /\.(less)$/,
                loader: [
                    'style-loader',
                    '!css-loader',
                    '!less-loader'
                ].join('')
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
