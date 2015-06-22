import { LOGIN, LOGOUT } from '../constants/action-types';
import AuthApiService from '../services/auth-api-service';

export function login(email, password) {
    return async (dispatch) => {
        try {
            let { data } = await AuthApiService.login(email, password);
            dispatch({
                type: LOGIN,
                success: true,
                data
            });
        } catch (err) {
            if (err.status && err.statusText) {
                dispatch({
                    type: LOGIN,
                    success: false,
                    data: err.data
                });
            } else {
                throw new Error(err);
            }
        }
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
            if (err.status && err.statusText) {
                dispatch({
                    type: LOGOUT,
                    success: false
                });
            } else {
                throw new Error(err);
            }
        }
    };
}
