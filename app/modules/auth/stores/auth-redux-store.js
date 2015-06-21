import { LOGIN, LOGOUT } from '../constants/action-types';

class AuthState {

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

const initialState = new AuthState();

const handlers = {

    [LOGIN]: function loginHandler(state, action) {
        if (action.success) {
            state.setState({
                user: action.data.user,
                token: action.data.id
            });
        } else {
            state.clearState();
        }
        return state;
    },

    [LOGOUT]: function logoutHandler(state, action) {
        if (action.success) {
            state.clearState();
        }
        return state;
    }

};

export default function todos(state = initialState, action) {
    if (!action) {
        return state;
    }
    return handlers[action.type] ? handlers[action.type](state, action) : state;
}
