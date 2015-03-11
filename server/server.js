'use strict';

var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var express = require('express');

var server = express();

server.set('port', (process.env.PORT || 5000));
server.use(express.static(path.join(__dirname)));

//
// Server-side rendering
// -----------------------------------------------------------------------------

var templateFile = path.join(__dirname, 'templates/index.html');
var template = _.template(fs.readFileSync(templateFile, 'utf8'));


server.use("/assets", express.static(path.join(__dirname, "..", "build")));

server.get('*', function(req, res) {
  res.send(template({}));
});

server.listen(server.get('port'), function() {
  if (process.send) {
    process.send('online');
  } else {
    console.log('The server is running at http://localhost:' + server.get('port'));
  }
});
