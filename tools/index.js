import fs from 'fs';
import path from 'path';

const tasks = fs.readdirSync('./tools/tasks/').filter(function taskFinder(name) {
    return /(\.(js)$)/i.test(path.extname(name));
});

tasks.forEach((task) => {
    require('./tasks/' + task);
});
