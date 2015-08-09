import webpack from 'webpack';
import browserSync from 'browser-sync';

export default (cb) => {

    const DEBUG = !global.isProd;
    const watch = DEBUG;
    let started = false;

    const config = require('../webpack.config')(DEBUG ? 'dev' : 'prod');

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

};
