var gulp = require('gulp');
var runSequence = require('run-sequence');
var _ = require('lodash');

gulp.task('dev', ['clean'], function devTask(callback) {

    callback = callback || _.noop;

    global.isProd = false;

    runSequence(['images', 'fonts', 'views', 'webpack'], 'watch-browser-sync', callback);

});

gulp.task('dev-no-sync', ['clean'], function devNoSyncTask(callback) {

    callback = callback || _.noop;

    global.isProd = false;

    runSequence(['images', 'fonts', 'views', 'webpack'], 'watch', callback);

});
