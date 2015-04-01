'use strict';

import React from 'react';

require('./icon.less');

export default React.createClass({

    propTypes: {
        name: React.PropTypes.string.isRequired,
        size: React.PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
        rotate: React.PropTypes.oneOf(['90', '180', '270']),
        flip: React.PropTypes.oneOf(['horizontal', 'vertical']),
        fixedWidth: React.PropTypes.bool,
        spin: React.PropTypes.bool
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
