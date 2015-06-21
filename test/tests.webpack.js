/*eslint-disable */
require('react-tools/src/test/phantomjs-shims.js');
var context = require.context('../app', true, /\.spec\.js$/);
context.keys().forEach(context);
