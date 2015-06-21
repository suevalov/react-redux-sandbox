import React from 'react';
import getProps from 'utils/get-props';
import redux from '../redux';

export default function(DecoratedComponent) {

    const displayName =
      DecoratedComponent.displayName ||
      DecoratedComponent.name ||
      'Component';

    return class extends React.Component {

        static displayName = `authRequired(${displayName})`;

        static willTransitionTo = (transition) => {
            let { authState } = redux.getState();
            if (!authState.loggedIn) {
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
