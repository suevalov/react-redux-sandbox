/* eslint-disable */

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack-hot.config');

new WebpackDevServer(webpack(config), {
    contentBase: config.output.contentBase,
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
})
.listen(3000, 'localhost', function listener(err) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:3000');
});
