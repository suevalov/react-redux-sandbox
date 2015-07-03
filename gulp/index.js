
var fs = require('fs');
var path = require('path');
var tasks = fs.readdirSync('./gulp/tasks/').filter(function taskFinder(name) {
    return /(\.(js)$)/i.test(path.extname(name));
});

tasks.forEach(function taskIterator(task) {
    require('./tasks/' + task);
});
