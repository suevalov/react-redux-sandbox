import { assign } from 'lodash/object';
let modules = [ 'base', 'auth', 'demo-components', 'todo' ];

export default function localesLoader(locale, phrases) {
    let locales = modules.map(module => {
        return require(`modules/${module}/locales/locale-${locale}`);
    });

    return assign({}, phrases, ...locales);
}
