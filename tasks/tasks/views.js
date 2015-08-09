var config = require('../config');
var gulp = require('gulp');

// Views task
gulp.task('views', function viewsTask() {

    // Put our index.html in the dist folder
    gulp.src('app/index.html', {
        base: './app'
    })
        .pipe(gulp.dest(config.dist.root));

});
