import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from '../../webpack-hot.config';
import gutil from 'gulp-util';

export default () => {
    new WebpackDevServer(webpack(webpackConfig), {
        contentBase: webpackConfig.output.contentBase,
        publicPath: webpackConfig.output.publicPath,
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
