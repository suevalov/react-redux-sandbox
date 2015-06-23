export default class AuthState {

    _authToken;
    _user;
    _requestStatus;

    constructor(
        user = JSON.parse(sessionStorage.getItem('authUser')),
        authToken = sessionStorage.getItem('authToken')
    ) {
        this._authToken = authToken;
        this._user = user;
        this._requestStatus = '';
    }

    get user() {
        return this._user;
    }

    set user(value) {
        if (value) {
            sessionStorage.setItem('authUser', JSON.stringify(value));
            this._user = value;
        } else {
            sessionStorage.removeItem('authUser');
            this._user = null;
        }
    }

    get authToken() {
        return this._authToken;
    }

    set authToken(value) {
        if (value) {
            sessionStorage.setItem('authToken', value);
            this._authToken = value;
        } else {
            sessionStorage.removeItem('authToken');
            this._authToken = null;
        }
    }

    get requestStatus() {
        return this._requestStatus;
    }

    set requestStatus(status) {
        this._requestStatus = status;
    }

    get loggedIn() {
        return !!this.authToken;
    }

    clearState() {
        this.user = null;
        this.authToken = null;
        this.requestStatus = '';
    }

    setState({ authToken, user }) {
        this.user = user;
        this.authToken = authToken;
    }

    toJSON() {
        return {
            user: this.user,
            authToken: this.authToken,
            loggedIn: this.loggedIn,
            requestStatus: this.requestStatus
        };
    }

}
