import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    FLUSH_STATE
} from '../constants/action-types';
import AuthState from './auth-state';
import AsyncStatus from 'utils/async-status';

const initialState = (new AuthState()).toJSON();

const handlers = {

    [LOGIN_REQUEST]: function loginRequestReducer(state) {
        let authState = new AuthState(state.user, state.authToken);
        authState.requestStatus = AsyncStatus.REQUEST;
        return authState.toJSON();
    },

    [LOGIN_SUCCESS]: function loginSuccessReducer(state, action) {
        let authState = new AuthState(state.user, state.authToken);
        authState.setState({
            user: action.result.user,
            authToken: action.result.id
        });
        authState.requestStatus = AsyncStatus.SUCCESS;
        return authState.toJSON();
    },

    [LOGIN_FAILURE]: function loginFailureReducer(state) {
        let authState = new AuthState(state.user, state.authToken);
        authState.clearState();
        authState.requestStatus = AsyncStatus.FAILURE;
        return authState.toJSON();
    },

    [LOGOUT_REQUEST]: function logoutRequestReducer(state) {
        let authState = new AuthState(state.user, state.authToken);
        authState.requestStatus = AsyncStatus.REQUEST;
        return authState.toJSON();
    },

    [LOGOUT_SUCCESS]: function logoutSuccessReducer(state) {
        let authState = new AuthState(state.user, state.authToken);
        authState.clearState();
        authState.requestStatus = AsyncStatus.SUCCESS;
        return authState.toJSON();
    },

    [LOGOUT_FAILURE]: function logoutFailureReducer(state) {
        let authState = new AuthState(state.user, state.authToken);
        authState.requestStatus = AsyncStatus.FAILURE;
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
