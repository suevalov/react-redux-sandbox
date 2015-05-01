'use strict';

import Reflux from 'reflux';
import axios from 'axios';
import Config from '../utils/config';
import { assert } from 'chai';

const AuthApi = Config.getApiEndpoint('/users');

let AuthActions = Reflux.createActions({

    login: {
        asyncResult: true
    },

    logout: {
        asyncResult: true
    }

});

AuthActions.login.listen(async function(email, password) {

    assert.isString(email);
    assert.isString(password);
    try {
        let { data } = await axios.post(AuthApi + '/login?include=user', {
            email: email,
            password: password
        });
        this.completed(data);
    } catch (err) {
        this.failed(err.data);
    }

});

AuthActions.logout.listen(async function(token) {

    assert.isString(token);
    try {
        await axios.post(`${AuthApi}/logout?access_token=${token}`);
        this.completed();
    } catch (err) {
        this.failed();
    }

});

export default AuthActions;
