'use strict';

import 'babel/polyfill';

import React from 'react';
import Router from 'react-router';

/**
 * Components
 */

import Layout from './pages/layout';
import TodoPage from './pages/todo-app/todo-app';
import NotFoundPage from './pages/not-found-page/not-found-page';
import ButtonsTestsPage from './components/inspinia/button/__tests__/buttons-tests-page';

/**
 * Routes Configuration
 */

let { Route, DefaultRoute, NotFoundRoute } = Router;

let routes = (
    <Route name="app" path="/" handler={Layout}>
        <Route name="buttons" handler={ButtonsTestsPage} />
        <DefaultRoute handler={TodoPage}/>
        <NotFoundRoute handler={NotFoundPage}/>
    </Route>
);

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
