import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    FLUSH_STATE
} from 'modules/auth/constants/action-types';
import ImmutableStore from 'immutable-store';
import AsyncStatus from 'utils/async-status';
import createReducer from 'utils/create-reducer';
import authSessionService from 'modules/auth/services/auth-session-service';

function getInitialState() {

    const { user, authToken } = authSessionService.getSession();

    return ImmutableStore({
        user,
        authToken,
        loggedIn: !!authToken,
        requestStatus: AsyncStatus.NONE
    });
}

const handlers = {

    [LOGIN_REQUEST]: function loginRequestReducer(state) {
        return state.set('requestStatus', AsyncStatus.REQUEST);
    },

    [LOGIN_SUCCESS]: function loginSuccessReducer(state, action) {
        const { user, authToken } = action.result;
        authSessionService.setSession({ user, authToken });
        return ImmutableStore({
            user,
            authToken,
            loggedIn: true,
            requestStatus: AsyncStatus.SUCCESS
        });
    },

    [LOGIN_FAILURE]: function loginFailureReducer(state) {
        return state.set('requestStatus', AsyncStatus.FAILURE);
    },

    [LOGOUT_REQUEST]: function logoutRequestReducer(state) {
        return state.set('requestStatus', AsyncStatus.REQUEST);
    },

    [LOGOUT_SUCCESS]: function logoutSuccessReducer() {
        authSessionService.clearSession();
        return ImmutableStore({
            user: null,
            authToken: null,
            loggedIn: false,
            requestStatus: AsyncStatus.SUCCESS
        });
    },

    [LOGOUT_FAILURE]: function logoutFailureReducer(state) {
        return state.set('requestStatus', AsyncStatus.FAILURE);
    },

    [FLUSH_STATE]: function flushHandler() {
        authSessionService.clearSession();
        return getInitialState();
    }

};

export default createReducer(getInitialState(), handlers);
