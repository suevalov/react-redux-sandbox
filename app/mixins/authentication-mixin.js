'use strict';

import AuthStore from '../stores/auth-store';

export default {

    statics: {

        willTransitionTo(transition) {
            if (!AuthStore.isLoggedIn()) {
                let options = {};
                if (transition.path !== '' && transition.path !== '/') {
                    options.nextPath = transition.path;
                }
                transition.redirect('/login', {}, options);
            }
        }

    }

};
