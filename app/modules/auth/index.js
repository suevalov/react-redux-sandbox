'use strict';

import LoginHandler from './handlers/login-handler';
import AuthStore from 'modules/auth/stores/auth-store';

require('./login-page.less');

export default {
    LoginHandler: LoginHandler,
    authRequired: (transition) => {
        if (!AuthStore.isLoggedIn()) {
            let options = {};
            if (transition.path !== '' && transition.path !== '/') {
                options.nextPath = transition.path;
            }
            transition.redirect('/login', {}, options);
        }
    }
};
