'use strict';

require('./dropdown-menu.less');

import React from 'react/addons';
import joinClasses from '../utils/join-classes';
import createChainedFunction from '../utils/create-chained-function';
import ValidComponentChildren from '../utils/valid-component-children';

let { classSet, cloneWithProps } = React.addons;

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
                className={joinClasses(this.props.className, classSet(classes))}
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
