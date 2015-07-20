import Polyglot from 'node-polyglot';
import localeSessionService from 'modules/base/services/locale-session-service';

const locale = localeSessionService.getLocale();

const polyglot = new Polyglot({
    locale,
    phrases: require(`locales/locale-${locale}`)
});

export const reloadTranslations = (newLocale) => {
    polyglot.replace(require(`locales/locale-${newLocale}`));
};

export default polyglot;
