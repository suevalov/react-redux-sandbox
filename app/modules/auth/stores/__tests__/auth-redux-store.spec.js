/* global describe, it, sinon */

import authReduxStore from '../auth-redux-store';
import { LOGIN, LOGOUT } from '../../constants/action-types';
import { expect } from 'chai';

describe('Auth Redux Store', () => {

    it('should be a function', () => {
        expect(authReduxStore).to.be.a('function');
    });

    it('should return initialState', () => {

        let state = authReduxStore();

        expect(state).to.be.an('object');
        expect(state.user).to.be.null;
        expect(state.authToken).to.be.null;
        expect(state.loggedIn).to.be.false;

    });

});
