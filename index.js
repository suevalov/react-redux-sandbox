'use strict';

var path = require('path');
var express = require('express');

var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname)));

console.log('Development mode is on');

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var proxy = require('proxy-middleware');
var url = require('url');
var config = require('./webpack.config.js');

app.use("/assets", proxy(url.parse('http://localhost:8081/assets')));

var server = new WebpackDevServer(webpack(config), {
    debug: true,
    contentBase: __dirname,
    quiet: false,
    noInfo: false,
    publicPath: "/assets/",
    stats: {colors: true}
});

server.listen(8081, "localhost", function() {
});


app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(app.get('port'), function() {
    if (process.send) {
        process.send('online');
    } else {
        console.log('The app is running at http://localhost:' + app.get('port'));
    }
});
