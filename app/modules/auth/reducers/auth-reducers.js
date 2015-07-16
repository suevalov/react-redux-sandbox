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

const initialState = (function getInitialState() {
    let user = sessionStorage.getItem('authUser') ? JSON.parse(sessionStorage.getItem('authUser')) : null;
    let authToken = sessionStorage.getItem('authToken') || null;

    return ImmutableStore({
        user,
        authToken,
        loggedIn: !!authToken,
        requestStatus: ''
    });
}());

const handlers = {

    [LOGIN_REQUEST]: function loginRequestReducer(state) {
        return state.set('requestStatus', AsyncStatus.REQUEST);
    },

    [LOGIN_SUCCESS]: function loginSuccessReducer(state, action) {
        sessionStorage.setItem('authUser', JSON.stringify(action.result.user));
        sessionStorage.setItem('authToken', action.result.id);
        return ImmutableStore({
            user: action.result.user,
            authToken: action.result.id,
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
        sessionStorage.removeItem('authUser');
        sessionStorage.removeItem('authToken');
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
        sessionStorage.removeItem('authUser');
        sessionStorage.removeItem('authToken');
        return ImmutableStore({
            user: null,
            authToken: null,
            loggedIn: false,
            requestStatus: AsyncStatus.NONE
        });
    }

};

export default createReducer(initialState, handlers);
