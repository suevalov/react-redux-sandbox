'use strict';

import React from 'react';
import getProps from 'utils/decorator-get-props';
import _ from 'lodash';

export default function(stores) {

    const HOC = Component => class ConnectToStoresDecorator extends React.Component {

        constructor() {
            super();
            this.state = _.extend(...(stores.map(store => {
                return store.getInitialState ? store.getInitialState() : {};
            })));
            this.listeners = [];
        }

        componentDidMount() {
            this.listeners = _.map(stores, store => {
                return store.listen(this.setState, this);
            });
        }

        componentWillUnmount() {
            _.each(this.listeners, unsubscribe => unsubscribe());
            this.listeners = [];
        }

        render() {
            const props = getProps.call(this);
            return <Component {...props} />;
        }

    };

    return HOC;

}
