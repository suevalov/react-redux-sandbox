export default class AuthState {

    _authToken;
    _user;

    constructor() {
        this._authToken = sessionStorage.getItem('authToken');
        this._user = JSON.parse(sessionStorage.getItem('authUser'));
    }

    get user() {
        return this._user;
    }

    set user(value) {
        sessionStorage.setItem('authUser', JSON.stringify(value));
        this._user = value;
    }

    get authToken() {
        return this._authToken;
    }

    set authToken(value) {
        sessionStorage.setItem('authToken', value);
        this._authToken = value;
    }

    get loggedIn() {
        return !!this.authToken;
    }

    clearState() {
        this.user = null;
        this.authToken = null;
    }

    setState({ token, user }) {
        this.user = user;
        this.authToken = token;
    }

}
