'use strict';

var gulp = require('gulp');
var del = require('del');
var path = require('path');

// Load plugins
var $ = require('gulp-load-plugins')();
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream'),
    sourceFile = './app/scripts/app.js',
    destFolder = './dist/scripts',
    destFileName = 'app.js';

// Scripts
gulp.task('scripts', function() {

    var bundler = watchify(browserify({
        entries: [sourceFile],
        insertGlobals: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }));

    function rebundle() {
        return bundler.bundle()
            // log errors if they happen
            .on('error', $.util.log.bind($.util, 'Browserify Error'))
            .pipe(source(destFileName))
            .pipe(gulp.dest(destFolder));
    }

    bundler.on('update', rebundle);

    return rebundle();

});

gulp.task('styles', function() {
    return gulp.src('app/styles/main.styl')
        .pipe($.stylus({
            sourcemap: {
                inline: true,
                sourceRoot: '..',
                basePath: 'css'
            }
        }))
        .pipe(gulp.dest('dist/styles'));
});

// HTML
gulp.task('html', function() {
    return gulp.src('app/*.html')
        .pipe($.useref())
        .pipe(gulp.dest('dist'))
        .pipe($.size());
});

// Images
gulp.task('images', function() {
    return gulp.src('app/images/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
        .pipe($.size());
});

gulp.task('jest', function() {
    var nodeModules = path.resolve('./node_modules');
    return gulp.src('app/scripts/**/__tests__')
        .pipe($.jest({
            scriptPreprocessor: nodeModules + '/gulp-jest/preprocessor.js',
            unmockedModulePathPatterns: [nodeModules + '/react']
        }));
});

// Clean
gulp.task('clean', function(cb) {
    del(['dist/styles', 'dist/scripts', 'dist/images'], cb);
});

// Bundle
gulp.task('bundle', ['styles', 'scripts', 'bower'], function() {
    return gulp.src('./app/*.html')
        .pipe($.useref.assets())
        .pipe($.useref.restore())
        .pipe($.useref())
        .pipe(gulp.dest('dist'));
});

// Build
gulp.task('build', ['html', 'bundle', 'images']);

// Default task
gulp.task('default', ['clean', 'build', 'jest']);

// Webserver
gulp.task('serve', function() {
    gulp.src('./dist')
        .pipe($.webserver({
            livereload: true,
            port: 9000,
            open: true
        }));
});

// Bower helper
gulp.task('bower', function() {
    gulp.src('app/bower_components/**/*.js', {base: 'app/bower_components'})
        .pipe(gulp.dest('dist/bower_components/'));

});

gulp.task('json', function() {
    gulp.src('app/scripts/json/**/*.json', {base: 'app/scripts'})
        .pipe(gulp.dest('dist/scripts/'));
});

// Watch
gulp.task('watch', ['html', 'bundle', 'serve'], function() {

    // Watch .json files
    gulp.watch('app/scripts/**/*.json', ['json']);

    // Watch .html files
    gulp.watch('app/*.html', ['html']);

    // Watch image filesf
    gulp.watch('app/images/**/*', ['images']);

    // Watch styles
    gulp.watch('app/styles/**/*', ['styles']);

});
