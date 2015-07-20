import Polyglot from 'node-polyglot';

const polyglot = new Polyglot({
    locale: 'en',
    phrases: require('locales/locale-en')
});

export default polyglot;
