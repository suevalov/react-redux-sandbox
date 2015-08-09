import { forEach } from 'lodash/collection';
import { pairs } from 'lodash/object';
import runSequence from 'run-sequence';
import config from './config';
import gulp from 'gulp';

const tasks = {
    'clean': './tasks/clean',
    'browserSync': './tasks/browserSync',
    'lint': './tasks/lint',
    'gzip': './tasks/gzip',
    'views': './tasks/views',
    'server': './tasks/server',
    'serverHot': './tasks/serverHot'
};

forEach(pairs(tasks), function registerGulpTask(task) {
    gulp.task(task[0], require(task[1]));
});

gulp.task('webpack', require('./tasks/webpack')(false));
gulp.task('webpack-watch', require('./tasks/webpack')(true));

gulp.task('watch', () => {
    gulp.watch([
        config.scripts.src,
        config.scripts.tests
    ], ['lint']);
});

gulp.task('build', ['clean'], (callback) => {
    global.isProd = false;
    runSequence('lint', ['views', 'webpack'], callback);
});

gulp.task('build:prod', ['clean'], (callback) => {
    global.isProd = true;
    runSequence('lint', ['views', 'webpack'], 'gzip', callback);
});

gulp.task('prod', (callback) => {
    runSequence('lint', ['views', 'webpack-watch'], 'gzip', 'browserSync', 'server', 'watch', callback);
});

gulp.task('hot', (callback) => {
    runSequence('lint', 'hotServer', 'watch', callback);
});

gulp.task('default', (callback) => {
    runSequence('lint', ['views', 'webpack-watch'], 'browserSync', 'server', 'watch', callback);
});
