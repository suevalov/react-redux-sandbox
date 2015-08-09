import config from '../config';
import changed from 'gulp-changed';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import browserSync from 'browser-sync';

gulp.task('fonts', () => {

    return gulp.src(config.fonts.src)
        .pipe(changed(config.fonts.dest))
        .pipe(gulp.dest(config.fonts.dest))
        .pipe(gulpif(browserSync.active, browserSync.reload({stream: true, once: true})));

});
