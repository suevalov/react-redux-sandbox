import config from '../config';
import browserSync from 'browser-sync';

export default () => {
    browserSync({
        proxy: 'localhost:' + config.serverport
    });
};
