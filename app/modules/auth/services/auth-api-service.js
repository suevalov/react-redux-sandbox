/* eslint-disable func-names */

import { post } from 'utils/api-axios';

const login = async function(email, password) {
    let { data } = await post('/auth/login', {
        withoutToken: true,
        email: email,
        password: password
    });
    return data;
};

const logout = async function() {
    let { data } = await post('/auth/logout', {
        withoutToken: true
    });
    return data;
};

export default {
    login,
    logout
};
