import Reflux from 'reflux';
import AuthApiService from 'modules/auth/services/auth-api-service';

let AuthActions = Reflux.createActions({

    login: {
        asyncResult: true
    },

    logout: {
        asyncResult: true
    }

});

/**
 * @param {String} email
 * @param {String} password
 */
AuthActions.login.listen(async function loginAsyncHandler(email, password) {

    try {
        let { data } = await AuthApiService.login(email, password);
        this.completed(data);
    } catch (err) {
        this.failed(err.data);
    }

});

/**
 * @param {String} token
 */
AuthActions.logout.listen(async function logoutAsyncHandler(token) {

    try {
        await AuthApiService.logout(token);
        this.completed();
    } catch (err) {
        this.failed();
    }

});

export default AuthActions;
