'use strict';

import Reflux from 'reflux';
import { assert } from 'chai';
import API from '../utils/api';

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
        let { data } = await API.auth().login(email, password);
        this.completed(data);
    } catch (err) {
        this.failed(err.data);
    }

});

AuthActions.logout.listen(async function(token) {

    assert.isString(token);
    try {
        await API.auth().logout(token);
        this.completed();
    } catch (err) {
        this.failed();
    }

});

export default AuthActions;
