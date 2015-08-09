import config from '../config';
import browserSync from 'browser-sync';
import gulp from 'gulp';

gulp.task('browserSync', () => {

    browserSync({
        proxy: 'localhost:' + config.serverport
    });

});
