'use strict';

/**
 * Gets the `props` and `state` to be passed to the component (as `props`).
 * Functions are bound to the higher-order component.
 *
 * @return {Object}
 * @api private
 */
export default function () {
    const props = {};

    [this.props, this.state].forEach(function (obj) {
        if (obj) {
            for (let key in obj) {
                let value = obj[key];

                props[key] = typeof value === 'function'
                    ? value.bind(this)
                    : value;
            }
        }
    }.bind(this));

    return props;
}
