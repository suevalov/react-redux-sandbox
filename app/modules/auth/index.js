'use strict';

import LoginHandler from './views/login-page-view/login-page-view';
import AuthStore from 'modules/auth/stores/auth-store';

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
    },
    redirectWhenLoggedIn: (transition) => {
        if (AuthStore.isLoggedIn()) {
            transition.redirect('/', {});
        }
    }
};
