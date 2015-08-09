import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('prod-build', ['clean'], function prodBuildTask(callback) {

    global.isProd = true;

    runSequence(['images', 'fonts', 'views', 'webpack'], 'lint', 'gzip', callback);

});

gulp.task('prod', ['clean'], function prodTask(callback) {

    global.isProd = true;

    runSequence(['images', 'fonts', 'views', 'webpack'], 'lint', 'gzip', 'watch', callback);

});
