import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE
} from '../constants/action-types';
import authApiService from '../services/auth-api-service';

export function login(email, password) {
    return {
        types: [ LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE ],
        promise: authApiService.login(email, password)
                    .then((result) => {
                        return {
                            user: {
                                email: result.auth.email
                            },
                            authToken: result.id
                        };
                    })
    };
}

export function logout(token) {
    return {
        types: [ LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE ],
        promise: authApiService.logout(token)
    };
}
