/* global describe, fdescribe, fit, it, sinon, expect */

import authReduxStore from '../auth-redux-store';

describe('Auth Redux Store', () => {

    it('should be a function', () => {
        expect(typeof authReduxStore).toBe('function');
    });

    it('should return initialState', () => {

        let state = authReduxStore();

        expect(typeof state).toBe('object');
        expect(state.user).toBeNull();
        expect(state.authToken).toBeNull();
        expect(state.loggedIn).toBeFalsy();

    });

});
