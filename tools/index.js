import { forEach } from 'lodash/collection';
import { pairs } from 'lodash/object';
import runSequence from 'run-sequence';
import config from './config';
import gulp from 'gulp';

const tasks = {
    'clean': './tasks/clean',
    'browserSync': './tasks/browserSync',
    'lint': './tasks/lint',
    'images': './tasks/images',
    'fonts': './tasks/fonts',
    'gzip': './tasks/gzip',
    'views': './tasks/views',
    'webpack': './tasks/webpack',
    'server': './tasks/server',
    'serverHot': './tasks/serverHot'
};

forEach(pairs(tasks), function registerGulpTask(task) {
    gulp.task(task[0], require(task[1]));
});

gulp.task('watch', () => {
    gulp.watch(config.scripts.src, ['lint']);
    gulp.watch(config.images.src, ['images']);
    gulp.watch(config.fonts.src, ['fonts']);
});

gulp.task('build', ['clean'], (callback) => {
    global.isProd = false;
    runSequence('lint', ['images', 'fonts', 'views', 'webpack'], callback);
});

gulp.task('build:prod', ['clean'], (callback) => {
    global.isProd = true;
    runSequence('lint', ['images', 'fonts', 'views', 'webpack'], 'gzip', callback);
});

gulp.task('prod', (callback) => {
    runSequence('build:prod', 'browserSync', 'server', 'watch', callback);
});

gulp.task('hot', [ 'serverHot' ]);

gulp.task('default', (callback) => {
    runSequence('build', 'browserSync', 'server', 'watch', callback);
});
