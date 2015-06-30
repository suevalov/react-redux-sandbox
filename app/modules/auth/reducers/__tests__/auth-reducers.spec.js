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
import Immutable from 'immutable';
import AsyncStatus from 'utils/async-status';

import { createRedux } from 'redux';

describe('Auth Reducers', () => {

    let redux = createRedux({
        authState: authReducers
    });

    afterEach(() => {
        redux.dispatch({
            type: FLUSH_STATE
        });
    });

    it('should be a function', () => {
        expect(typeof authReducers).toBe('function');
    });

    it('should return initialState', () => {
        let { authState } = redux.getState();
        expect(authState instanceof Immutable.Map).toBeTruthy();
        expect(authState.get('user')).toBeNull();
        expect(authState.get('authToken')).toBeNull();
        expect(authState.get('loggedIn')).toBeFalsy();
        expect(authState.get('requestStatus')).toBe(AsyncStatus.NONE);
    });

    it('should change request status after LOGIN_REQUEST action', () => {
        redux.dispatch({
            type: LOGIN_REQUEST
        });
        let { authState } = redux.getState();
        expect(authState.get('requestStatus')).toBe(AsyncStatus.REQUEST);
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

        expect(authState.get('user').toJS()).toEqual({
            username: 'foobar'
        });
        expect(authState.get('authToken')).toEqual('123123');
        expect(authState.get('loggedIn')).toBeTruthy();
        expect(authState.get('requestStatus')).toBe(AsyncStatus.SUCCESS);

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

        expect(authState.get('user')).toEqual(null);
        expect(authState.get('authToken')).toEqual(null);
        expect(authState.get('loggedIn')).toBeFalsy();
        expect(authState.get('requestStatus')).toBe(AsyncStatus.FAILURE);

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

            expect(redux.getState().authState.get('loggedIn')).toBeTruthy();
        });

        it('should be change request state after success LOGOUT_REQUEST action', () => {

            redux.dispatch({
                type: LOGOUT_REQUEST
            });

            let { authState } = redux.getState();

            expect(authState.get('loggedIn')).toBeTruthy();
            expect(authState.get('user')).not.toBeNull();
            expect(authState.get('authToken')).not.toBeNull();
            expect(authState.get('requestStatus')).toBe(AsyncStatus.REQUEST);

            expect(sessionStorage.getItem('authUser')).not.toBeNull();
            expect(sessionStorage.getItem('authToken')).not.toBeNull();

        });

        it('should be logged out after LOGOUT_SUCCESS action', () => {

            redux.dispatch({
                type: LOGOUT_SUCCESS
            });

            let { authState } = redux.getState();

            expect(authState.get('loggedIn')).toBeFalsy();
            expect(authState.get('user')).toBeNull();
            expect(authState.get('authToken')).toBeNull();
            expect(authState.get('requestStatus')).toBe(AsyncStatus.SUCCESS);

            expect(sessionStorage.getItem('authUser')).toBeNull();
            expect(sessionStorage.getItem('authToken')).toBeNull();

        });

        it('should not be logged out after failed LOGOUT_FAILURE action', () => {

            redux.dispatch({
                type: LOGOUT_FAILURE
            });

            let { authState } = redux.getState();

            expect(authState.get('loggedIn')).toBeTruthy();
            expect(authState.get('user')).not.toBeNull();
            expect(authState.get('authToken')).not.toBeNull();
            expect(authState.get('requestStatus')).toBe(AsyncStatus.FAILURE);

            expect(sessionStorage.getItem('authUser')).not.toBeNull();
            expect(sessionStorage.getItem('authToken')).not.toBeNull();

        });

    });

});
