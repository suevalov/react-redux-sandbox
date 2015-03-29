'use strict';

import Reflux from 'reflux';
import AuthActions from '../actions/auth-actions';

let AuthStore = Reflux.createStore({

    listenables: AuthActions,

    init() {
        this.authToken = '';
        this.user = null;
    },

    onLoginCompleted() {

    },

    onLoginFailed() {

    },

    onLogoutCompleted() {

    },

    onLogoutFailed() {

    },

    isLoggedIn() {
        return !!this.authToken;
    },

    getUser() {
        if (this.isLoggedIn()) {
            return this.user;
        } else {
            return null;
        }
    },

    getToken() {
        return this.authToken;
    }

});

module.exports = AuthStore;
