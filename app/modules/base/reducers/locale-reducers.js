
import {
    SET_LOCALE,
    FLUSH_STATE
} from 'modules/base/constants/action-types';
import ImmutableStore from 'immutable-store';
import createReducer from 'utils/create-reducer';

const DEFAULT_LOCALE = 'en';

export const getNewState = (params) => {
    return ImmutableStore(params);
};

export const getInitialState = () => {
    return getNewState({
        locale: DEFAULT_LOCALE
    });
};

export default createReducer(getInitialState(), {

    [SET_LOCALE]: function setLocaleReducer(state, action) {
        return state.set('locale', action.locale);
    },

    /**
     * For tests
     */
    [FLUSH_STATE]: getInitialState

});
