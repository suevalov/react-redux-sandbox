var config = require('../config');
var gulp = require('gulp');

gulp.task('watch', ['server'], function watchTask() {

    gulp.watch(config.scripts.src, ['lint']);
    gulp.watch(config.images.src, ['images']);
    gulp.watch(config.fonts.src, ['fonts']);

});

gulp.task('watch-browser-sync', ['browserSync', 'server'], function watchBrowserSyncTask() {

    gulp.watch(config.scripts.src, ['lint']);
    gulp.watch(config.images.src, ['images']);
    gulp.watch(config.fonts.src, ['fonts']);

});
