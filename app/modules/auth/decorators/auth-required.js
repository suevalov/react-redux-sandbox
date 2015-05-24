'use strict';

import React from 'react';
import AuthStore from 'modules/auth/stores/auth-store';
import getProps from 'utils/get-props';

export default function(DecoratedComponent) {

    const displayName =
      DecoratedComponent.displayName ||
      DecoratedComponent.name ||
      'Component';

    return class AuthRequiredDecorator extends React.Component {

        static displayName = `authRequired(${displayName})`;

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
            return <DecoratedComponent {...props} />;
        }

    };

}
