'use strict';

import 'babel/polyfill';

import React from 'react';
import Router from 'react-router';

/**
 * Components
 */

import App from './components/app/app';
import InboxPage from './components/inbox-page/inbox-page';
import CalendarPage from './components/calendar-page/calendar-page';
import DashboardPage from './components/dashboard-page/dashboard-page';
import NotFoundPage from './components/not-found-page/not-found-page';

import ButtonsTestsPage from './components/inspinia/button/__tests__/buttons-tests-page';

/**
 * Routes Configuration
 */

let { Route, DefaultRoute, NotFoundRoute } = Router;

let routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="inbox" handler={InboxPage}/>
        <Route name="calendar" handler={CalendarPage}/>
        <Route name="buttons" handler={ButtonsTestsPage} />
        <DefaultRoute handler={DashboardPage}/>
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
