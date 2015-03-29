'use strict';

import Reflux from 'reflux';
import AuthActions from '../actions/auth-actions';
import { assert } from 'chai';

let AuthStore = Reflux.createStore({

    listenables: AuthActions,

    init() {
        this.authToken = sessionStorage.getItem('authToken');
        this.user = JSON.parse(sessionStorage.getItem('authUser'));
    },

    setState(token, user) {
        sessionStorage.setItem('authToken', token);
        sessionStorage.setItem('authUser', JSON.stringify(user));
        this.user = user;
        this.authToken = token;
    },

    clearState() {
        this.user = null;
        this.authToken = '';
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('authUser');
    },

    onLoginCompleted(data) {

        assert.isString(data.id);
        assert.isObject(data.user);

        this.setState(data.id, data.user);
        this.trigger({
            loggedIn: true
        });

    },

    onLoginFailed() {
        this.clearState();
        this.trigger({
            loggedIn: false
        });
    },

    onLogoutCompleted() {
        this.clearState();
        this.trigger({
            loggedOut: true
        });
    },

    onLogoutFailed() {
        this.trigger({
            loggedOut: false
        });
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
