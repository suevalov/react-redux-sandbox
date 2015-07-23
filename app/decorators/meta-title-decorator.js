import React from 'react';
import Helmet from 'react-helmet';
import getProps from 'utils/get-props';
import { assign } from 'lodash/object';

export default (config) => {

    return (DecoratedComponent) => {

        const defaultHelmentParams = {
            title: 'Sandbox.js',
            titleTemplate: 'Sandbox.js - %s',
            meta: [
                {'name': 'description', 'content': 'Sandbox.js application'}
            ]
        };

        const helmetParams = assign({}, defaultHelmentParams, config);

        return class MetaTitle extends React.Component {
            render() {

                let props = getProps.call(this);

                return (
                    <Helmet {...helmetParams}>
                        <DecoratedComponent {...props} />
                    </Helmet>
                );
            }
        };

    };

};
