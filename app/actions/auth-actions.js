'use strict';

import Reflux from 'reflux';
import axios from 'axios';
import Config from '../constants/config';
import { assert } from 'chai';

const AuthApi = Config.getApiEndpoint() + '/users/';

let AuthActions = Reflux.createActions({

    login: {
        asyncResult: true
    },

    logout: {
        asyncResult: true
    }

});

AuthActions.login.listen(function(email, password) {

    assert.isString(email);
    assert.isString(password);

    axios.post(AuthApi + 'login', {
        credentials: {
            email: email,
            password: password
        }
    })
        .then((response) => {
            this.completed(response.data);
        })
        .catch((response) => {
            this.failed(response);
        });

});

AuthActions.logout.listen(function() {

    axios.post(AuthApi + 'logout')
        .then(() => {
            this.completed();
        })
        .catch(() => {
            this.failed();
        });

});

module.exports = AuthActions;
