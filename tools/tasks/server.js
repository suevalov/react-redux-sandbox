import config from '../config';
import http from 'http';
import express from 'express';
import gutil from 'gulp-util';
import morgan from 'morgan';

export default () => {
    const server = express();

    // log all requests to the console
    server.use(morgan('dev'));
    server.use(express.static(config.dist.root));

    // Serve index.html for all routes to leave routing up to Angular
    server.all('/*', (req, res) => {
        res.sendFile('index.html', {root: 'build'});
    });

    // Start webserver if not already running
    const s = http.createServer(server);
    s.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            gutil.log('Development server is already started at port ' + config.serverport);
        } else {
            throw err;
        }
    });

    s.listen(config.serverport);
};
