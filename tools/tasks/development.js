import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', ['clean'], (callback) => {

    global.isProd = false;

    runSequence(['images', 'fonts', 'views', 'webpack'], 'lint', 'watch', callback);

});
