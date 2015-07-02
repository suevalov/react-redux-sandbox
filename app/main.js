import 'babel-core/polyfill';
import 'react-tools/src/test/phantomjs-shims';

require('./main.less');

import React from 'react';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import appRedux from 'app-redux';
import { Provider } from 'redux/react';

import { LoginPage } from 'modules/auth';
import { TodoPage } from 'modules/todo';
import { MainLayout } from 'modules/layout';
import { DemoComponentsLayout } from 'modules/demo-components';
import ButtonSamplesPage from './components/button/__sample__/button-samples-page';
import ButtonGroupSamplesPage from './components/button-group/__sample__/button-group-samples-page';
import DropdownButtonSamplesPage from './components/dropdown-button/__sample__/dropdown-button-samples-page';

import redux from './app-redux';

function requireAuth(nextState, transition) {
    let { authState } = redux.getState();
    if (!authState.get('loggedIn')) {
        transition.to('/login', null, { nextPathname: nextState.location.pathname });
    }
}

function redirectIfSignedIn(nextState, transition) {
    let { authState } = redux.getState();
    if (authState.get('loggedIn')) {
        transition.to('/');
    }
}

React.render((
    <Provider redux={appRedux}>
        {() =>
            <Router history={history}>
                <Route path='login' component={LoginPage} onEnter={redirectIfSignedIn} />
                <Route component={MainLayout} onEnter={requireAuth}>
                    <Route path='/' component={TodoPage} />
                </Route>
                <Route path='components' component={DemoComponentsLayout}>
                    <Route path='buttons' component={ButtonSamplesPage} />
                    <Route path='button-groups' component={ButtonGroupSamplesPage} />
                    <Route path='dropdown-buttons' component={DropdownButtonSamplesPage} />
                </Route>
            </Router>
        }
    </Provider>
), document.getElementById('application'));
