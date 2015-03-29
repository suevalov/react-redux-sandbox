'use strict';

require('./dropdown-menu.less');

import React from '../../../node_modules/react/addons';
import createChainedFunction from '../utils/create-chained-function';
import ValidComponentChildren from '../utils/valid-component-children';
import classSet from 'classnames';

let { cloneWithProps } = React.addons;

export default React.createClass({

    propTypes: {
        pullRight: React.PropTypes.bool,
        onSelect: React.PropTypes.func
    },

    render() {

        let classes = {
            'dropdown-menu': true,
            'dropdown-menu-right': this.props.pullRight
        };

        return (
            <ul
                {...this.props}
                className={classSet(this.props.className, classes)}
                role='menu'>
            {ValidComponentChildren.map(this.props.children, this.renderMenuItem)}
            </ul>
        );
    },

    renderMenuItem(child, index) {
        return cloneWithProps(
            child,
            {
                onSelect: createChainedFunction(child.props.onSelect, this.props.onSelect),
                key: child.key ? child.key : index,
                ref: child.ref
            }
        );
    }

});
