import config from '../config';
import gulp from 'gulp';

export default () => {
    // Put our index.html in the dist folder
    gulp.src('app/index.html', {
        base: './app'
    })
        .pipe(gulp.dest(config.dist.root));
};
