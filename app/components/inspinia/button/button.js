'use strict';

require('./button.less');

import React from 'react/addons';
import { PropTypes } from 'react/addons';
import joinClasses from '../utils/join-classes';
import _ from 'lodash';

const { PureRenderMixin, classSet } = React.addons;

const THEMES = {
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
    'normal': 'normal',
    'large': 'lg'
};

export default React.createClass({

    displayName: 'Button',

    mixins: [ PureRenderMixin ],

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
        minWidth: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.number
        ]),
        outline: PropTypes.bool,
        block: PropTypes.bool,
        circle: PropTypes.bool,
        rounded: PropTypes.bool,
        dim: PropTypes.bool,

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
            minWidth: false,
            outline: false,
            block: false,
            circle: false,
            rounded: false,
            dim: false,
            size: SIZES.normal,
            theme: THEMES.default
        };
    },

    prepareProps(thisProps) {

        let props = _.extend({}, thisProps);

        props.onClick = this.handleClick.bind(this, props);
        props.onFocus = this.handleFocus.bind(this, props);
        props.onBlur = this.handleBlur.bind(this, props);
        props.onMouseEnter = this.handleMouseEnter.bind(this, props);
        props.onMouseLeave = this.handleMouseLeave.bind(this, props);
        props.onMouseDown = this.handleMouseDown.bind(this, props);
        props.onMouseUp = this.handleMouseUp.bind(this, props);

        return props;
    },

    prepareClasses(props) {

        let classes = {};

        classes['btn'] = true;
        classes['btn-' + THEMES[props.theme]] = true;
        classes['btn-' + SIZES[props.size]] = props.size !== SIZES.normal;
        classes['btn-min-width'] = props.minWidth === true;
        classes['btn-outline'] = props.outline === true;
        classes['btn-block'] = props.block === true;
        classes['btn-circle'] = props.circle === true;
        classes['btn-rounded'] = props.rounded === true;
        classes['btn-dim'] = props.dim === true;

        classes['active'] = props.active;
        classes['disabled'] = props.disabled;

        return classes;
    },

    prepareStyles(props) {

        let styles = {};

        if (_.isNumber(props.minWidth)) {
            styles['min-width'] = `${props.minWidth}px`;
        }

        return styles;
    },

    handleClick(props, event) {
        if (!props.href || props.disabled) {
            event.preventDefault();
        }

        if (props.disabled) {
            return;
        }

        (this.props.onClick || _.noop)(event);
    },

    handleFocus(props, event) {
        if (props.disabled) {
            return;
        }

        (this.props.onFocus || _.noop)(event);
    },

    handleBlur(props, event) {
        if (props.disabled) {
            return;
        }

        (this.props.onBlur || _.noop)(event);
    },

    handleMouseEnter(props, event) {
        if (props.disabled) {
            return;
        }

        (this.props.onMouseEnter || _.noop)(event);
    },

    handleMouseLeave(props, event) {
        if (props.disabled) {
            return;
        }

        (this.props.onMouseLeave || _.noop)(event);
    },

    handleMouseDown(props, event) {
        if (props.disabled) {
            return;
        }

        (this.props.onMouseDown || _.noop)(event);
    },

    handleMouseUp(props, event) {
        if (props.disabled) {
            return;
        }

        (this.props.onMouseUp || _.noop)(event);
    },

    render() {

        let props = this.prepareProps(this.props);
        let classes = this.prepareClasses(props);
        let styles = this.prepareStyles(props);

        let renderFuncName = props.href || props.target ? 'renderAnchor' : 'renderButton';

        return this[renderFuncName](classes, props, styles);

    },

    renderAnchor(classes, props, styles) {
        var Component = props.componentClass || 'a';
        var href = props.href || '#';
        return (
            <Component
                {...props}
                href={href}
                style={styles}
                className={joinClasses(classSet(classes), this.props.className)}
                role='button'>
                {props.children}
            </Component>
        );
    },

    renderButton(classes, props, styles) {
        var Component = props.componentClass || 'button';
        return (
            <Component
                {...props}
                style={styles}
                className={joinClasses(classSet(classes), this.props.className)}>
                {props.children}
            </Component>
        );
    }

});
