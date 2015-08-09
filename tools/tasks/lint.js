var config = require('../config');
var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint', function lintTask() {

    return gulp.src(config.scripts.src)
        .pipe(eslint())
        .pipe(eslint.format());

});
