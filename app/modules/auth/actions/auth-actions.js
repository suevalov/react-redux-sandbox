import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE
} from '../constants/action-types';
import AuthApiService from '../services/auth-api-service';
import promiseAxiosMiddleware from 'utils/promise-axios-middleware';

export function login(email, password) {
    return (dispatch) => {
        promiseAxiosMiddleware(dispatch)({
            types: [ LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE ],
            promise: AuthApiService.login(email, password)
        });
    };
}

export function logout(token) {
    return (dispatch) => {
        promiseAxiosMiddleware(dispatch)({
            types: [ LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE ],
            promise: AuthApiService.logout(token)
        });
    };
}
