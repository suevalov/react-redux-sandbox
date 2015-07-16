/* global describe, fdescribe, fit, it, sinon, expect, beforeEach, afterEach */

import authReducers from 'modules/auth/reducers/auth-reducers';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    FLUSH_STATE
} from 'modules/auth/constants/action-types';
import AsyncStatus from 'utils/async-status';

import { createStore, combineReducers } from 'redux';

describe('Auth Reducers', () => {

    let store = createStore(combineReducers({
        authState: authReducers
    }));

    afterEach(() => {
        store.dispatch({
            type: FLUSH_STATE
        });
    });

    it('should be a function', () => {
        expect(typeof authReducers).toBe('function');
    });

    it('should return initialState', () => {
        let { authState } = store.getState();
        expect(authState.user).toBeNull();
        expect(authState.authToken).toBeNull();
        expect(authState.loggedIn).toBeFalsy();
        expect(authState.requestStatus).toBe(AsyncStatus.NONE);
    });

    it('should change request status after LOGIN_REQUEST action', () => {
        store.dispatch({
            type: LOGIN_REQUEST
        });
        let { authState } = store.getState();
        expect(authState.requestStatus).toBe(AsyncStatus.REQUEST);
    });

    it('should be logged in after success LOGIN action', () => {

        store.dispatch({
            type: LOGIN_SUCCESS,
            result: {
                id: '123123',
                user: {
                    username: 'foobar'
                }
            }
        });

        let { authState } = store.getState();

        expect(authState.user).toEqual({
            username: 'foobar'
        });
        expect(authState.authToken).toEqual('123123');
        expect(authState.loggedIn).toBeTruthy();
        expect(authState.requestStatus).toBe(AsyncStatus.SUCCESS);

        expect(sessionStorage.authUser).toEqual(JSON.stringify({
            username: 'foobar'
        }));
        expect(sessionStorage.authToken).toEqual('123123');

    });

    it('should not be logged in after failed LOGIN action', () => {

        store.dispatch({
            type: LOGIN_FAILURE
        });

        let { authState } = store.getState();

        expect(authState.user).toEqual(null);
        expect(authState.authToken).toEqual(null);
        expect(authState.loggedIn).toBeFalsy();
        expect(authState.requestStatus).toBe(AsyncStatus.FAILURE);

        expect(sessionStorage.getItem('authUser')).toBeNull();
        expect(sessionStorage.getItem('authToken')).toBeNull();

    });

    describe('when user is logged in', () => {


        beforeEach(() => {
            store.dispatch({
                type: LOGIN_SUCCESS,
                result: {
                    id: '123123',
                    user: {
                        username: 'foobar'
                    }
                }
            });

            expect(store.getState().authState.loggedIn).toBeTruthy();
        });

        it('should be change request state after success LOGOUT_REQUEST action', () => {

            store.dispatch({
                type: LOGOUT_REQUEST
            });

            let { authState } = store.getState();

            expect(authState.loggedIn).toBeTruthy();
            expect(authState.user).not.toBeNull();
            expect(authState.authToken).not.toBeNull();
            expect(authState.requestStatus).toBe(AsyncStatus.REQUEST);

            expect(sessionStorage.getItem('authUser')).not.toBeNull();
            expect(sessionStorage.getItem('authToken')).not.toBeNull();

        });

        it('should be logged out after LOGOUT_SUCCESS action', () => {

            store.dispatch({
                type: LOGOUT_SUCCESS
            });

            let { authState } = store.getState();

            expect(authState.loggedIn).toBeFalsy();
            expect(authState.user).toBeNull();
            expect(authState.authToken).toBeNull();
            expect(authState.requestStatus).toBe(AsyncStatus.SUCCESS);

            expect(sessionStorage.getItem('authUser')).toBeNull();
            expect(sessionStorage.getItem('authToken')).toBeNull();

        });

        it('should not be logged out after failed LOGOUT_FAILURE action', () => {

            store.dispatch({
                type: LOGOUT_FAILURE
            });

            let { authState } = store.getState();

            expect(authState.loggedIn).toBeTruthy();
            expect(authState.user).not.toBeNull();
            expect(authState.authToken).not.toBeNull();
            expect(authState.requestStatus).toBe(AsyncStatus.FAILURE);

            expect(sessionStorage.getItem('authUser')).not.toBeNull();
            expect(sessionStorage.getItem('authToken')).not.toBeNull();

        });

    });

});
