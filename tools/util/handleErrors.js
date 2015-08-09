import notify from 'gulp-notify';

/* eslint-disable no-console, no-process-exit */
export default function handleErrors(...args) {

    if ( !global.isProd ) {

        // Send error to notification center with gulp-notify
        notify.onError({
            title: 'Compile Error',
            message: '<%= error.message %>'
        }).apply(this, args);

        // Keep gulp from hanging on this task
        this.emit('end');

    } else {
        // Log the error and stop the process
        // to prevent broken code from building
        console.log(args[0]);
        process.exit(1);
    }

}
/* eslint-enable no-console, no-process-exit */
