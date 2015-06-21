import 'babel-core/polyfill';
import 'react-tools/src/test/phantomjs-shims';

import React from 'react';
import { Router, Route } from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';

import { LoginHandler } from 'modules/auth';
import { TodoHandler } from 'modules/todo';
import { SignedIn, SignedOff } from 'modules/layout';
import ComponentsHandler from './handlers/components-handler';
import ButtonSamplesPage from './components/button/__sample__/button-samples-page';
import ButtonGroupSamplesPage from './components/button-group/__sample__/button-group-samples-page';
import DropdownButtonSamplesPage from './components/dropdown-button/__sample__/dropdown-button-samples-page';

import redux from './app-redux';

function requireAuth(nextState, transition) {
    let { authState } = redux.getState();
    if (!authState.loggedIn) {
        transition.to('/login', null, { nextPathname: nextState.location.pathname });
    }
}

function redirectIfSignedIn(nextState, transition) {
    let { authState } = redux.getState();
    if (authState.loggedIn) {
        transition.to('/');
    }
}

React.render((
    <Router history={new BrowserHistory()}>
        <Route component={SignedIn} onEnter={requireAuth}>
            <Route path='/' component={TodoHandler} />
            <Route path='components' component={ComponentsHandler}>
                <Route path='buttons' component={ButtonSamplesPage} />
                <Route path='button-groups' component={ButtonGroupSamplesPage} />
                <Route path='dropdown-buttons' component={DropdownButtonSamplesPage} />
            </Route>
        </Route>
        <Route component={SignedOff} onEnter={redirectIfSignedIn}>
            <Route path='login' component={LoginHandler} />
        </Route>
    </Router>
), document.getElementById('application'));
