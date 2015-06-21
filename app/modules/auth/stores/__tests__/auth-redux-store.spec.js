/* global describe, fdescribe, fit, it, sinon, expect, beforeEach, afterEach */

import authReduxStore from '../auth-redux-store';
import { LOGIN, LOGOUT, FLUSH_STATE } from '../../constants/action-types';

import { createRedux } from 'redux';

describe('Auth Redux Store', () => {

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
    });

    it('should be logged in after success LOGIN action', () => {

        redux.dispatch({
            type: LOGIN,
            success: true,
            data: {
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

    });

    it('should not be logged in after failed LOGIN action', () => {

        redux.dispatch({
            type: LOGIN,
            success: false
        });

        let { authState } = redux.getState();

        expect(authState.user).toEqual(null);
        expect(authState.authToken).toEqual(null);
        expect(authState.loggedIn).toBeFalsy();

    });

    describe('when user is logged in', () => {


        beforeEach(() => {
            redux.dispatch({
                type: LOGIN,
                success: true,
                data: {
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
