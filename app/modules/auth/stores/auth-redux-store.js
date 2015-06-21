import { LOGIN, LOGOUT, FLUSH_STATE } from '../constants/action-types';
import AuthState from './auth-state';

const initialState = new AuthState();

const handlers = {

    [LOGIN]: function loginHandler(state, action) {
        if (action.success) {
            state.setState({
                user: action.data.user,
                token: action.data.id
            });
        } else {
            state.clearState();
        }
        return state;
    },

    [LOGOUT]: function logoutHandler(state, action) {
        if (action.success) {
            state.clearState();
        }
        return state;
    },

    [FLUSH_STATE]: function flushHandler(state) {
        state.clearState();
        return state;
    }

};

export default function todos(state = initialState, action) {
    if (!action) {
        return state;
    }
    return handlers[action.type] ? handlers[action.type](state, action) : state;
}
