import { LOGIN, LOGOUT, FLUSH_STATE } from '../constants/action-types';
import AuthState from './auth-state';

const initialState = (new AuthState()).toJSON();

const handlers = {

    [LOGIN]: function loginHandler(state, action) {
        let authState = new AuthState(state.user, state.authToken);
        if (action.success) {
            authState.setState({
                user: action.data.user,
                authToken: action.data.id
            });
        } else {
            authState.clearState();
        }
        return authState.toJSON();
    },

    [LOGOUT]: function logoutHandler(state, action) {
        let authState = new AuthState(state.user, state.authToken);
        if (action.success) {
            authState.clearState();
        }
        return authState.toJSON();
    },

    [FLUSH_STATE]: function flushHandler(state) {
        let authState = new AuthState(state.user, state.authToken);
        authState.clearState();
        return authState.toJSON();
    }

};

export default function authStore(state = initialState, action = null) {
    if (!action) {
        return state;
    }
    return handlers[action.type] ? handlers[action.type](state, action) : state;
}
