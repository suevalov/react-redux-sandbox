'use strict';

import 'babel-core/polyfill';
import 'react-tools/src/test/phantomjs-shims';

import React from 'react';
import Router from 'react-router';
import routes from 'routes';

/**
 * Start application
 */

Promise.all([
    new Promise((resolve) => {
        if (window.addEventListener) {
            window.addEventListener('DOMContentLoaded', resolve);
        } else {
            window.attachEvent('onload', resolve);
        }
    })
]).then(() => {
    Router.run(routes, Router.HistoryLocation, Handler => {
        React.render(React.createElement(Handler), document.body);
    });
});
