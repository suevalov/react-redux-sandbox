var config = require('../config');
var http = require('http');
var express = require('express');
var gulp = require('gulp');
var gutil = require('gulp-util');
var morgan = require('morgan');

gulp.task('server', function serverTask() {

    var server = express();
    var s;

    // log all requests to the console
    server.use(morgan('dev'));
    server.use(express.static(config.dist.root));

    // Serve index.html for all routes to leave routing up to Angular
    server.all('/*', function serve(req, res) {
        res.sendFile('index.html', {root: 'build'});
    });

    // Start webserver if not already running
    s = http.createServer(server);
    s.on('error', function onErrorHandler(err) {
        if (err.code === 'EADDRINUSE') {
            gutil.log('Development server is already started at port ' + config.serverport);
        } else {
            throw err;
        }
    });

    s.listen(config.serverport);

});
