const DEFAULT_LOCALE = 'en';

function setLocale(locale) {
    localStorage.setItem('locale', locale);
}

function getLocale() {
    const locale = localStorage.getItem('locale');
    if (locale) {
        return locale;
    }
    setLocale(DEFAULT_LOCALE);
    return DEFAULT_LOCALE;
}

function resetLocale() {
    setLocale(DEFAULT_LOCALE);
}

export default {
    getLocale,
    setLocale,
    resetLocale
};
