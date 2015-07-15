/* global __DEVELOPMENT__ */

import 'react-tools/src/test/phantomjs-shims';

require('./main.less');

import React from 'react';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import { LoginPage } from 'modules/auth';
import { TodoPage } from 'modules/todo';
import { MainLayout } from 'modules/layout';
import { DemoComponentsLayout } from 'modules/demo-components';
import ButtonSamplesPage from './components/button/__sample__/button-samples-page';
import ButtonGroupSamplesPage from './components/button-group/__sample__/button-group-samples-page';
import DropdownButtonSamplesPage from './components/dropdown-button/__sample__/dropdown-button-samples-page';

import store from './store';
import { Provider } from 'react-redux';

function requireAuth(nextState, transition) {
    let { authState } = store.getState();
    if (!authState.get('loggedIn')) {
        transition.to('/login', null, { nextPathname: nextState.location.pathname });
    }
}

function redirectIfSignedIn(nextState, transition) {
    let { authState } = store.getState();
    if (authState.get('loggedIn')) {
        transition.to('/');
    }
}

const elements = [
    <Provider store={store} key='provider'>
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
];

// if (__DEVELOPMENT__) {
//     const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
//     elements.push(
//         <DebugPanel top right bottom key='debugPanel'>
//             <DevTools store={store} monitor={LogMonitor} />
//         </DebugPanel>
//     );
// }

React.render((
    <div id='application-container'>
        { elements }
    </div>
), document.getElementById('application'));
