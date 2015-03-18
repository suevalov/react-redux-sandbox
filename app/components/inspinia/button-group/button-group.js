'use strict';

require('./button-group.less');

import React from 'react/addons';
import joinClasses from '../utils/joinClasses';

let { PropTypes } = React;
let { classSet } = React.addons;

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
                className={joinClasses(this.props.className, classSet(classes))}>
                {this.props.children}
            </div>
        );
    }

});
