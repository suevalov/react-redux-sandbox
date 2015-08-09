var config = require('../config');
var browserSync = require('browser-sync');
var gulp = require('gulp');

gulp.task('browserSync', function browserSyncTask() {

    browserSync({
        proxy: 'localhost:' + config.serverport
    });

});
