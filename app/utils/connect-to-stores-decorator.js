import React from 'react';
import getProps from 'utils/get-props';
import { map, each } from 'lodash/collection';

export default function(stores, getState) {

    return (DecoratedComponent) => {

        const displayName =
          DecoratedComponent.displayName ||
          DecoratedComponent.name ||
          'Component';

        return class extends React.Component {

            static displayName = `connectToStores(${displayName})`;

            constructor(props) {
                super(props);
                this.state = getState(props);
                this.listeners = [];
            }

            componentDidMount() {
                this.listeners = map(stores, store => {
                    return store.listen(this.handleStoreChange, this);
                });
            }

            componentWillUnmount() {
                each(this.listeners, unsubscribe => unsubscribe());
                this.listeners = [];
            }

            handleStoreChange() {
                this.setState(getState(this.props));
            }

            render() {
                const props = getProps.call(this);
                return <DecoratedComponent {...props} />;
            }

        };
    };

}
