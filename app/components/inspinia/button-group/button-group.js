'use strict';

require('./button-group.less');

import React from 'react';
import classSet from 'classnames';

let { PropTypes } = React;

export default React.createClass({

    propTypes: {
        vertical: PropTypes.bool,
        justified: PropTypes.bool
    },

    getDefaultProps() {
        return {
            vertical: false,
            justified: false
        };
    },

    render() {

        let classes = {
            'btn-group': !this.props.vertical,
            'btn-group-vertical': this.props.vertical,
            'btn-group-justified': this.props.justified
        };

        return (
            <div
                {...this.props}
                className={classSet(classes, this.props.className)}>
                {this.props.children}
            </div>
        );
    }

});
