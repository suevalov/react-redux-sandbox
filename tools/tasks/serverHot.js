import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import gutil from 'gulp-util';

export default () => {

    const config = require('../webpack.config')('hot');

    new WebpackDevServer(webpack(config), {
        contentBase: config.output.contentBase,
        publicPath: config.output.publicPath,
        hot: true,
        historyApiFallback: true
    })
    .listen(3000, 'localhost', function listener(err) {
        if (err) {
            gutil.log(err);
        }
        gutil.log('Listening at localhost:3000');
    });
};
