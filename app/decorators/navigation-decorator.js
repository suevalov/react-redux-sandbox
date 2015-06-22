import React from 'react';
import getProps from 'utils/get-props';
import { Navigation } from 'react-router';

export default function(DecoratedComponent) {

    const displayName =
        DecoratedComponent.displayName ||
        DecoratedComponent.name ||
        'Component';

    return React.createClass({

        displayName: `navigation(${displayName})`,

        mixins: [ Navigation ],

        render() {

            let props = getProps.call(this);

            let navigation = {
                makePath: this.makePath,
                makeHref: this.makeHref,
                transitionTo: this.transitionTo,
                replaceWith: this.replaceWith,
                go: this.go,
                goBack: this.goBack,
                goForward: this.goForward
            };

            return <DecoratedComponent {...props} navigation={navigation} />;
        }

    });

}
