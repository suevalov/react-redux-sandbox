'use strict';

import 'babel/polyfill';

import React from 'react';
import Router from 'react-router';

/**
 * Components
 */

import Layout from './pages/layout';
import LoginPage from './pages/login-page/login-page';
import TodoPage from './pages/todo-app/todo-app';
import NotFoundPage from './pages/not-found-page/not-found-page';
import ComponentsPage from './pages/components-page/components-page';
import ButtonSamplesPage from './components/button/__sample__/button-samples-page';
import ButtonGroupSamplesPage from './components/button-group/__sample__/button-group-samples-page';
import DropdownButtonSamplesPage from './components/dropdown-button/__sample__/dropdown-button-samples-page';

/**
 * Routes Configurations
 */

let { Route, DefaultRoute, NotFoundRoute } = Router;

let routes = (
    <Route name='app' path='/' handler={Layout}>
        <DefaultRoute handler={TodoPage}/>
        <Route name='login' handler={LoginPage} />
        <Route name='components' handler={ComponentsPage}>
            <Route name='buttons' handler={ButtonSamplesPage} />
            <Route name='button-groups' handler={ButtonGroupSamplesPage} />
            <Route name='dropdown-buttons' handler={DropdownButtonSamplesPage} />
        </Route>
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
