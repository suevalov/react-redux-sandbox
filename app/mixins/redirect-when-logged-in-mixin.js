'use strict';

import AuthStore from 'stores/auth-store';

export default {

    statics: {

        willTransitionTo(transition) {
            if (AuthStore.isLoggedIn()) {
                transition.redirect('/', {});
            }
        }

    }

};
