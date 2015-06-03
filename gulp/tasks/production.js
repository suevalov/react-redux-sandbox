var gulp = require('gulp');
var runSequence = require('run-sequence');
var _ = require('lodash');

gulp.task('prod-build', ['clean'], function prodBuildTask(callback) {

    callback = callback || _.noop;

    global.isProd = true;

    runSequence(['images', 'fonts', 'views', 'webpack'], 'gzip', callback);

});

gulp.task('prod', ['clean'], function prodTask(callback) {

    callback = callback || _.noop;

    global.isProd = true;

    runSequence(['images', 'fonts', 'views', 'webpack'], 'gzip', 'watch', callback);

});
