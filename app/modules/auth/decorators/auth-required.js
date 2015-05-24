'use strict';

import React from 'react';
import AuthStore from 'modules/auth/stores/auth-store';
import getProps from 'utils/decorator-get-props';

export default Component => class AuthRequiredDecorator extends React.Component {

    static willTransitionTo = (transition) => {
        if (!AuthStore.isLoggedIn()) {
            let options = {};
            if (transition.path !== '' && transition.path !== '/') {
                options.nextPath = transition.path;
            }
            transition.redirect('/login', {}, options);
        }
    };

    render() {
        const props = getProps.call(this);
        return <Component {...props} />;
    }

};
