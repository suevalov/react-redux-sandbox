import React, { PropTypes } from 'react';
import getProps from 'utils/get-props';
import { Navigation } from 'react-router';

export default function(DecoratedComponent) {

    const displayName =
        DecoratedComponent.displayName ||
        DecoratedComponent.name ||
        'Component';

    return React.createClass({

        displayName: `logoutHandler(${displayName})`,

        mixins: [ Navigation ],

        contextTypes: {
            store: PropTypes.object.isRequired
        },

        componentDidMount() {
            this.unsubscribe = this.context.store.subscribe(() => {
                let { authState } = this.context.store.getState();
                if (!authState.loggedIn) {
                    this.replaceWith('/login');
                }
            });
        },

        componentWillUnmount() {
            this.unsubscribe();
        },

        render() {

            let props = getProps.call(this);

            return <DecoratedComponent {...props} />;
        }

    });

}
