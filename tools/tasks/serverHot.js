import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import gutil from 'gulp-util';
import config from '../config';

export default () => {

    const webpackConfig = require('../webpack.config')('hot');

    new WebpackDevServer(webpack(webpackConfig), {
        contentBase: webpackConfig.output.contentBase,
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        historyApiFallback: true
    })
    .listen(config.serverport, 'localhost', (err) => {
        if (err) {
            gutil.log(err);
        }
        gutil.log('Listening at localhost:3000');
    });
};
