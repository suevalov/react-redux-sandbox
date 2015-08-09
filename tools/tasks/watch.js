import config from '../config';
import gulp from 'gulp';

gulp.task('watch', ['browserSync', 'server'], () => {

    gulp.watch(config.scripts.src, ['lint']);
    gulp.watch(config.images.src, ['images']);
    gulp.watch(config.fonts.src, ['fonts']);

});
