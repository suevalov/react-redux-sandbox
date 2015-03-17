'use strict';

require('./font-awesome/font-awesome.less');

import React from 'react';
let PropTypes = React.PropTypes;

module.exports = React.createClass({

    propTypes: {
        name: PropTypes.string.isRequired,
        size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
        rotate: PropTypes.oneOf(['90', '180', '270']),
        flip: PropTypes.oneOf(['horizontal', 'vertical']),
        fixedWidth: PropTypes.bool,
        spin: PropTypes.bool
    },

    render() {
        let { name, size, rotate, flip, spin, fixedWidth, className } = this.props;

        var classNames = `fa fa-${name}`;

        if (size) {
            classNames += ` fa-${size}`;
        }

        if (rotate) {
            classNames += ` fa-rotate-${rotate}`;
        }

        if (flip) {
            classNames += ` fa-flip-${flip}`;
        }

        if (fixedWidth) {
            classNames += ' fa-fw';
        }

        if (spin) {
            classNames += ' fa-spin';
        }

        if (className) {
            classNames += ` ${className}`;
        }

        return <i {...this.props} className={classNames} />;
    }

});
