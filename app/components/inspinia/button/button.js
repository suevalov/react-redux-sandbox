'use strict';

import React from 'react';
import { PureRenderMixin, PropTypes } from 'react/addons';
import joinClasses from '../utils/joinClasses';
import classSet from '../utils/classSet';
import assign from 'object-assign';
import _ from 'lodash';

require('./button.less');

function emptyFn() {}

let THEMES = {
    'default': 'default',
    'primary': 'primary',
    'success': 'success',
    'info': 'info',
    'warning': 'warning',
    'danger': 'danger',
    'white': 'white',
    'link': 'link'
};

let SIZES = {
    'xsmall': 'xs',
    'small': 'sm',
    'default': '',
    'large': 'lg'
};

export default React.createClass({

    displayName: 'Button',

    mixins: [PureRenderMixin],

    propTypes: {

        onClick: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
        onMouseDown: PropTypes.func,
        onMouseUp: PropTypes.func,

        size: PropTypes.oneOf(_.keys(SIZES)),
        theme: PropTypes.oneOf(_.keys(THEMES)),
        active: PropTypes.bool,
        disabled: PropTypes.bool,
        href: PropTypes.string,
        target: PropTypes.string,
        componentClass: PropTypes.string
    },

    getDefaultProps() {
        return {
            active: false,
            disabled: false,
            size: SIZES.default,
            theme: THEMES.default
        };
    },

    prepareProps(thisProps) {

        let props = {};

        assign(props, thisProps);

        props.onClick      = this.handleClick.bind(this, props);
        props.onFocus      = this.handleFocus.bind(this, props);
        props.onBlur       = this.handleBlur.bind(this, props);
        props.onMouseEnter = this.handleMouseEnter.bind(this, props);
        props.onMouseLeave = this.handleMouseLeave.bind(this, props);
        props.onMouseDown  = this.handleMouseDown.bind(this, props);
        props.onMouseUp    = this.handleMouseUp.bind(this, props);

        return props;
    },

    prepareClasses(props) {
        let classes = {};

        classes['btn'] = true;
        classes['btn--' + THEMES[props.theme]] = true;
        classes['btn--' + SIZES[props.size]] = props.size !== SIZES.default;

        classes['active'] = props.active;
        classes['disabled'] = props.disabled;
        return classes;
    },

    handleClick(props, event) {
        if (!props.href || props.disabled) {
            event.preventDefault();
        }

        if (props.disabled) {
            return;
        }

        (this.props.onClick || emptyFn)(event);
    },

    handleFocus(props, event) {
        if (props.disabled) {
            return;
        }

        (this.props.onFocus || emptyFn)(event);
    },

    handleBlur(props, event) {
        if (props.disabled) {
            return;
        }

        (this.props.onBlur || emptyFn)(event);
    },

    handleMouseEnter(props, event) {
        if (props.disabled) {
            return;
        }

        (this.props.onMouseEnter || emptyFn)(event);
    },

    handleMouseLeave(props, event) {
        if (props.disabled) {
            return;
        }

        (this.props.onMouseLeave || emptyFn)(event);
    },

    handleMouseDown(props, event) {
        if (props.disabled) {
            return;
        }

        (this.props.onMouseDown || emptyFn)(event);
    },

    handleMouseUp(props, event) {
        if (props.disabled) {
            return;
        }

        (this.props.onMouseUp || emptyFn)(event);
    },

    render() {

        let props = this.prepareProps(this.props);
        let classes = this.prepareClasses(props);

        let renderFuncName = props.href || props.target ? 'renderAnchor' : 'renderButton';

        return this[renderFuncName](classes, props);

    },

    renderAnchor(classes, props) {
        var Component = props.componentClass || 'a';
        var href = props.href || '#';
        return (
            <Component
                {...props}
                href={href}
                className={joinClasses(classSet(classes), this.props.className)}
                role='button'>
                {props.children}
            </Component>
        );
    },

    renderButton(classes, props) {
        var Component = props.componentClass || 'button';
        return (
            <Component
                {...props}
                className={joinClasses(classSet(classes), this.props.className)}>
                {props.children}
            </Component>
        );
    }

});
