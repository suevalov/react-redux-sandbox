'use strict';

import React from 'react';
import Router from 'react-router';

import Layout from './pages/layout';
import { LoginHandler } from 'modules/auth';
import { TodoHandler } from 'modules/todo';
import NotFoundPage from './pages/not-found-page/not-found-page';
import ComponentsPage from './pages/components-page/components-page';
import ButtonSamplesPage from './components/button/__sample__/button-samples-page';
import ButtonGroupSamplesPage from './components/button-group/__sample__/button-group-samples-page';
import DropdownButtonSamplesPage from './components/dropdown-button/__sample__/dropdown-button-samples-page';

/**
 * Routes Configurations
 */

let { Route, DefaultRoute, NotFoundRoute } = Router;

module.exports = (
    <Route name='app' path='/' handler={Layout}>
        <DefaultRoute handler={TodoHandler}/>
        <Route name='login' handler={LoginHandler} />
        <Route name='components' handler={ComponentsPage}>
            <Route name='buttons' handler={ButtonSamplesPage} />
            <Route name='button-groups' handler={ButtonGroupSamplesPage} />
            <Route name='dropdown-buttons' handler={DropdownButtonSamplesPage} />
        </Route>
        <NotFoundRoute handler={NotFoundPage}/>
    </Route>
);
