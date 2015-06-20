import React from 'react';
import Router from 'react-router';

import { LoginHandler } from 'modules/auth';
import { TodoHandler } from 'modules/todo';
import { LayoutHandler } from 'modules/layout';
import TodoReduxHandler from 'modules/todo-redux';
import NotFoundHandler from './handlers/not-found-handler';
import ComponentsHandler from './handlers/components-handler';
import ButtonSamplesPage from './components/button/__sample__/button-samples-page';
import ButtonGroupSamplesPage from './components/button-group/__sample__/button-group-samples-page';
import DropdownButtonSamplesPage from './components/dropdown-button/__sample__/dropdown-button-samples-page';

/**
 * Routes Configurations
 */

let { Route, DefaultRoute, NotFoundRoute } = Router;

module.exports = (
    <Route name='app' path='/' handler={LayoutHandler}>
        <DefaultRoute handler={TodoHandler}/>
        <Route name='redux' handler={TodoReduxHandler} />
        <Route name='login' handler={LoginHandler} />
        <Route name='components' handler={ComponentsHandler}>
            <Route name='buttons' handler={ButtonSamplesPage} />
            <Route name='button-groups' handler={ButtonGroupSamplesPage} />
            <Route name='dropdown-buttons' handler={DropdownButtonSamplesPage} />
        </Route>
        <NotFoundRoute handler={NotFoundHandler}/>
    </Route>
);
