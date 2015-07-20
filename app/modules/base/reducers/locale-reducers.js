
import {
    SET_LOCALE,
    FLUSH_STATE
} from 'modules/base/constants/action-types';
import ImmutableStore from 'immutable-store';
import createReducer from 'utils/create-reducer';
import localeSessionService from 'modules/base/services/locale-session-service';
import { reloadTranslations } from 'i18n';

export const getNewState = (params) => {
    return ImmutableStore(params);
};

export const getInitialState = () => {
    return getNewState({
        locale: localeSessionService.getLocale()
    });
};

export default createReducer(getInitialState(), {

    [SET_LOCALE]: function setLocaleReducer(state, action) {
        const { locale } = action;
        localeSessionService.setLocale(locale);
        reloadTranslations(locale);
        return state.set('locale', locale);
    },

    /**
     * For tests
     */
    [FLUSH_STATE]: function flushStateReducer() {
        localeSessionService.resetLocale();
        return getInitialState();
    }

});
