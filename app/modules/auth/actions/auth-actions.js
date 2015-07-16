import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE
} from '../constants/action-types';
import authApiService from '../services/auth-api-service';
import { promiseMiddleware } from 'utils/redux-middlewares';

export function login(email, password) {
    return (dispatch) => {
        return promiseMiddleware(dispatch)({
            types: [ LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE ],
            promise: authApiService.login(email, password)
        });
    };
}

export function logout(token) {
    return (dispatch) => {
        promiseMiddleware(dispatch)({
            types: [ LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE ],
            promise: authApiService.logout(token)
        });
    };
}
