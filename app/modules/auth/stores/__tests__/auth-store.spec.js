/* global describe, fdescribe, fit, it, sinon, expect, beforeEach, afterEach */

import authReduxStore from '../auth-store';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
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

        it('should be logged out after success LOGOUT action', () => {

            redux.dispatch({
                type: LOGOUT,
                success: true
            });

            let { authState } = redux.getState();

            expect(authState.loggedIn).toBeFalsy();
            expect(authState.user).toBeNull();
            expect(authState.authToken).toBeNull();

        });

        it('should not be logged out after failed LOGOUT action', () => {

            redux.dispatch({
                type: LOGOUT,
                success: false
            });

            let { authState } = redux.getState();

            expect(authState.loggedIn).toBeTruthy();
            expect(authState.user).not.toBeNull();
            expect(authState.authToken).not.toBeNull();

        });

    });

});
