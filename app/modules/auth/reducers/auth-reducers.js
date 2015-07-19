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
import { getSession, setSession, clearSession } from 'modules/auth/services/auth-session-service';
import curry from 'lodash/function/curry';
import compose from 'lodash/function/compose';

export const getInitialState = () => {
    const { user, authToken } = getSession();

    return ImmutableStore({
        user,
        authToken,
        loggedIn: !!authToken,
        requestStatus: AsyncStatus.NONE
    });
};

export const setRequestReducer = curry((what, state) => {
    return state.set('requestStatus', what);
});

export default createReducer(getInitialState(), {

    /**
     * Login
     */
    [LOGIN_REQUEST]: setRequestReducer(AsyncStatus.REQUEST),

    [LOGIN_SUCCESS]: (state, action) => {
        const { user, authToken } = action.result;
        setSession({ user, authToken });
        return ImmutableStore({
            user,
            authToken,
            loggedIn: true,
            requestStatus: AsyncStatus.SUCCESS
        });
    },

    [LOGIN_FAILURE]: setRequestReducer(AsyncStatus.FAILURE),

    /**
     * Logout
     */
    [LOGOUT_REQUEST]: setRequestReducer(AsyncStatus.REQUEST),

    [LOGOUT_SUCCESS]: () => {
        clearSession();
        return ImmutableStore({
            user: null,
            authToken: null,
            loggedIn: false,
            requestStatus: AsyncStatus.SUCCESS
        });
    },

    [LOGOUT_FAILURE]: setRequestReducer(AsyncStatus.FAILURE),

    /**
     * For tests
     */
    [FLUSH_STATE]: compose(getInitialState, clearSession)

});
