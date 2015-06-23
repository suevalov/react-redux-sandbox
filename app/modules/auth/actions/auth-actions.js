import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
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
    return async (dispatch) => {
        try {
            await AuthApiService.logout(token);
            dispatch({
                type: LOGOUT,
                success: true
            });
        } catch (err) {
            if (err instanceof Error) {
                throw err;
            } else {
                dispatch({
                    type: LOGOUT,
                    success: false
                });
            }
        }
    };
}
