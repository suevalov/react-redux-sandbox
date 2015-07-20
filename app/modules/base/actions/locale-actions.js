import { SET_LOCALE } from 'modules/base/constants/action-types';
import availableLocales from 'modules/base/constants/available-locales';
import { pluck } from 'lodash/collection';

function isValidLocale(locale) {
    return pluck(availableLocales, 'code').indexOf(locale) !== -1;
}

export function setLocale(locale) {

    if (!isValidLocale(locale)) {
        throw new Error(`Wrong locale assingment. ${locale} is not supported by current application`);
    }
    return {
        type: SET_LOCALE,
        locale
    };
}
