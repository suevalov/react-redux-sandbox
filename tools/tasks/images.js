import config from '../config';
import changed from 'gulp-changed';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import imagemin from 'gulp-imagemin';
import browserSync from 'browser-sync';

export default () => {
    return gulp.src(config.images.src)
        .pipe(changed(config.images.dest)) // Ignore unchanged files
        .pipe(gulpif(global.isProd, imagemin())) // Optimize
        .pipe(gulp.dest(config.images.dest))
        .pipe(gulpif(browserSync.active, browserSync.reload({stream: true, once: true})));
};
