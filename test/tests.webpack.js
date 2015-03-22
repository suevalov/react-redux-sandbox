require('./es5-shim');

var context = require.context('../app', true, /-test\.js$/);
context.keys().forEach(context);
