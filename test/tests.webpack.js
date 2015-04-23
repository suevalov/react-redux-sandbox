require('react-tools/src/test/phantomjs-shims.js');

var context = require.context('../app', true, /-test\.js$/);
context.keys().forEach(context);
