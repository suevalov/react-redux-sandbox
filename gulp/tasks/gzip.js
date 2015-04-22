'use strict';

var gulp = require('gulp'),
    gzip = require('gulp-gzip'),
    config = require('../config');

gulp.task('gzip', function() {

    return gulp.src(config.gzip.src)
        .pipe(gzip(config.gzip.options))
        .pipe(gulp.dest(config.gzip.dest));

});
