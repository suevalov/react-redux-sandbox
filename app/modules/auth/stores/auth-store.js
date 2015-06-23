import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    FLUSH_STATE
} from '../constants/action-types';
import AuthState from './auth-state';

const initialState = (new AuthState()).toJSON();

const handlers = {

    [LOGIN_REQUEST]: function loginRequestReducer(state) {
        let authState = new AuthState(state.user, state.authToken);
        authState.requestStatus = 'request';
        return authState.toJSON();
    },

    [LOGIN_SUCCESS]: function loginSuccessReducer(state, action) {
        let authState = new AuthState(state.user, state.authToken);
        authState.setState({
            user: action.result.user,
            authToken: action.result.id
        });
        authState.requestStatus = 'success';
        return authState.toJSON();
    },

    [LOGIN_FAILURE]: function loginFailureReducer(state) {
        let authState = new AuthState(state.user, state.authToken);
        authState.clearState();
        authState.requestStatus = 'failure';
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
