'use strict';

import 'babel/polyfill';

import React from 'react';
import TodoApp from './scripts/ui/todo-app/todo-app.js';

require('./styles/main.less');

function run() {
    var component = React.createElement(TodoApp);
    React.render(component, document.body);
}

// Run the application when both DOM is ready
// and page content is loaded
Promise.all([
    new Promise((resolve) => {
        if (window.addEventListener) {
            window.addEventListener('DOMContentLoaded', resolve);
        } else {
            window.attachEvent('onload', resolve);
        }
    })
]).then(run);
