'use strict';

import AuthStore from 'modules/auth/stores/auth-store';

export default {

    statics: {

        willTransitionTo(transition) {
            if (AuthStore.isLoggedIn()) {
                transition.redirect('/', {});
            }
        }

    }

};
