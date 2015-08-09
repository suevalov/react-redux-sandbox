import config from '../config';
import del from 'del';

export default (cb) => {
    del([config.dist.root], cb);
};
