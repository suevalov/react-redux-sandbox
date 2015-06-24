/* global describe, fdescribe, fit, it, sinon, expect, beforeEach, afterEach */

import authReduxStore from '../auth-store';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    FLUSH_STATE
} from '../../constants/action-types';
import AsyncStatus from 'utils/async-status';

import { createRedux } from 'redux';

describe('Auth Store', () => {

    let redux = createRedux({
        authState: authReduxStore
    });

    afterEach(() => {
        redux.dispatch({
            type: FLUSH_STATE
        });
    });

    it('should be a function', () => {
        expect(typeof authReduxStore).toBe('function');
    });

    it('should return initialState', () => {
        let { authState } = redux.getState();
        expect(typeof authState).toBe('object');
        expect(authState.user).toBeNull();
        expect(authState.authToken).toBeNull();
        expect(authState.loggedIn).toBeFalsy();
        expect(authState.requestStatus).toBe(AsyncStatus.NONE);
    });

    it('should change request status after LOGIN_REQUEST action', () => {
        redux.dispatch({
            type: LOGIN_REQUEST
        });
        let { authState } = redux.getState();
        expect(authState.requestStatus).toBe(AsyncStatus.REQUEST);
    });

    it('should be logged in after success LOGIN action', () => {

        redux.dispatch({
            type: LOGIN_SUCCESS,
            result: {
                id: '123123',
                user: {
                    username: 'foobar'
                }
            }
        });

        let { authState } = redux.getState();

        expect(authState.user).toEqual({
            username: 'foobar'
        });
        expect(authState.authToken).toEqual('123123');
        expect(authState.loggedIn).toBeTruthy();
        expect(authState.requestStatus).toBe(AsyncStatus.SUCCESS);

        expect(sessionStorage.getItem('authUser')).toEqual(JSON.stringify({
            username: 'foobar'
        }));
        expect(sessionStorage.getItem('authToken')).toEqual('123123');

    });

    it('should not be logged in after failed LOGIN action', () => {

        redux.dispatch({
            type: LOGIN_FAILURE
        });

        let { authState } = redux.getState();

        expect(authState.user).toEqual(null);
        expect(authState.authToken).toEqual(null);
        expect(authState.loggedIn).toBeFalsy();
        expect(authState.requestStatus).toBe(AsyncStatus.FAILURE);

        expect(sessionStorage.getItem('authUser')).toBeNull();
        expect(sessionStorage.getItem('authToken')).toBeNull();

    });

    describe('when user is logged in', () => {


        beforeEach(() => {
            redux.dispatch({
                type: LOGIN_SUCCESS,
                result: {
                    id: '123123',
                    user: {
                        username: 'foobar'
                    }
                }
            });

            expect(redux.getState().authState.loggedIn).toBeTruthy();
        });

        it('should be change request state after success LOGOUT_REQUEST action', () => {

            redux.dispatch({
                type: LOGOUT_REQUEST
            });

            let { authState } = redux.getState();

            expect(authState.loggedIn).toBeTruthy();
            expect(authState.user).not.toBeNull();
            expect(authState.authToken).not.toBeNull();
            expect(authState.requestStatus).toBe(AsyncStatus.REQUEST);

            expect(sessionStorage.getItem('authUser')).not.toBeNull();
            expect(sessionStorage.getItem('authToken')).not.toBeNull();

        });

        it('should be logged out after LOGOUT_SUCCESS action', () => {

            redux.dispatch({
                type: LOGOUT_SUCCESS
            });

            let { authState } = redux.getState();

            expect(authState.loggedIn).toBeFalsy();
            expect(authState.user).toBeNull();
            expect(authState.authToken).toBeNull();
            expect(authState.requestStatus).toBe(AsyncStatus.SUCCESS);

            expect(sessionStorage.getItem('authUser')).toBeNull();
            expect(sessionStorage.getItem('authToken')).toBeNull();

        });

        it('should not be logged out after failed LOGOUT_FAILURE action', () => {

            redux.dispatch({
                type: LOGOUT_FAILURE
            });

            let { authState } = redux.getState();

            expect(authState.loggedIn).toBeTruthy();
            expect(authState.user).not.toBeNull();
            expect(authState.authToken).not.toBeNull();
            expect(authState.requestStatus).toBe(AsyncStatus.FAILURE);

            expect(sessionStorage.getItem('authUser')).not.toBeNull();
            expect(sessionStorage.getItem('authToken')).not.toBeNull();

        });

    });

});
