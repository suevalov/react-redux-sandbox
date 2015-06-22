/* global describe, fdescribe, fit, it, sinon, expect, beforeEach, afterEach, spyOn */

import AuthState from '../auth-state.js';

describe('AuthState', () => {

    afterEach(() => {
        sessionStorage.clear();
    });

    it('should initialize authToken and user from sessionStorage', () => {

        // empty session storage
        let state = new AuthState();
        expect(state.user).toBeNull();
        expect(state.authToken).toBeNull();

        // put something in session storage
        sessionStorage.setItem('authUser', JSON.stringify({
            username: 'foobar'
        }));
        sessionStorage.setItem('authToken', '123123');
        let state2 = new AuthState();
        expect(state2.user).toEqual({
            username: 'foobar'
        });
        expect(state2.authToken).toEqual('123123');

    });

    it('should put user value in sessionStorage on every set', () => {

        let state = new AuthState();

        spyOn(sessionStorage, 'setItem');
        state.user = {
            username: 'Crazy Rabbit'
        };
        expect(sessionStorage.setItem).toHaveBeenCalledWith('authUser', JSON.stringify(state.user));

        spyOn(sessionStorage, 'removeItem');
        state.user = null;
        expect(sessionStorage.removeItem).toHaveBeenCalledWith('authUser');

    });

    it('should put authToken value in sessionStorage on every set', () => {

        let state = new AuthState();

        spyOn(sessionStorage, 'setItem');
        state.authToken = '123123';
        expect(sessionStorage.setItem).toHaveBeenCalledWith('authToken', '123123');

        spyOn(sessionStorage, 'removeItem');
        state.authToken = null;
        expect(sessionStorage.removeItem).toHaveBeenCalledWith('authToken');

    });

    it('should not seek in sessionStorage if constructor is not empty', () => {

        spyOn(sessionStorage, 'getItem');

        let state1 = new AuthState({ username: 'username' }, '123123');
        expect(sessionStorage.getItem).not.toHaveBeenCalled();
        expect(typeof state1.toJSON()).toBe('object');

        let state2 = new AuthState({ username: 'username'});
        expect(sessionStorage.getItem).toHaveBeenCalledWith('authToken');
        expect(typeof state2.toJSON()).toBe('object');

    });

    it('should return loggedIn based on authToken', () => {

        let state = new AuthState();
        state.setState({
            user: {
                username: 'username'
            },
            authToken: '123123'
        });

        expect(state.loggedIn).toBeTruthy();
        state.clearState();
        expect(state.loggedIn).toBeFalsy();

    });

    it('toJSON should return object', () => {

        let state = new AuthState({ username: 'username'}, '123123');

        let serialized = state.toJSON();

        expect(typeof serialized).toBe('object');
        expect(serialized.authToken).toEqual('123123');
        expect(serialized.user).toEqual({
            username: 'username'
        });
        expect(serialized.loggedIn).toBeTruthy();

    });

});
