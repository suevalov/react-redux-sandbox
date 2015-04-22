'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var _ = require('lodash');

gulp.task('dev', ['clean'], function(callback) {

    callback = callback || _.noop;

    global.isProd = false;

    runSequence(['images', 'fonts', 'views', 'webpack'], 'watch', callback);

});
