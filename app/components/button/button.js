'use strict';

import React from 'react/addons';
import _ from 'lodash';
import classSet from 'classnames';
import pureShouldComponentUpdate from 'react-pure-render/function';

require('./button.less');

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

export default class extends React.Component {

    shouldComponentUpdate = pureShouldComponentUpdate;

    static propTypes = {

        onClick: React.PropTypes.func,
        onFocus: React.PropTypes.func,
        onBlur: React.PropTypes.func,
        onMouseEnter: React.PropTypes.func,
        onMouseLeave: React.PropTypes.func,
        onMouseDown: React.PropTypes.func,
        onMouseUp: React.PropTypes.func,

        size: React.PropTypes.oneOf(_.keys(SIZES)),
        theme: React.PropTypes.oneOf(_.keys(THEMES)),
        minWidth: React.PropTypes.oneOfType([
            React.PropTypes.bool,
            React.PropTypes.number
        ]),
        outline: React.PropTypes.bool,
        block: React.PropTypes.bool,
        circle: React.PropTypes.bool,
        rounded: React.PropTypes.bool,
        dim: React.PropTypes.bool,

        active: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        href: React.PropTypes.string,
        target: React.PropTypes.string,
        componentClass: React.PropTypes.string,
        type: React.PropTypes.string
    };

    static defaultProps = {
        active: false,
        disabled: false,
        minWidth: false,
        outline: false,
        block: false,
        circle: false,
        rounded: false,
        dim: false,
        size: SIZES.normal,
        theme: THEMES.default,
        type: 'button'
    };

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
    }

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
    }

    prepareStyles(props) {

        let styles = {};

        if (_.isNumber(props.minWidth)) {
            styles['minWidth'] = `${props.minWidth}px`;
        }

        return styles;
    }

    handleClick(props, event) {
        if (props.disabled) {
            event.preventDefault();
            return;
        }

        if (this.props.onClick) {
            this.props.onClick(event);
        }
    }

    handleFocus(props, event) {
        if (props.disabled) {
            return;
        }

        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    }

    handleBlur(props, event) {
        if (props.disabled) {
            return;
        }

        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    }

    handleMouseEnter(props, event) {
        if (props.disabled) {
            return;
        }

        if (this.props.onMouseEnter) {
            this.props.onMouseEnter(event);
        }
    }

    handleMouseLeave(props, event) {
        if (props.disabled) {
            return;
        }

        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(event);
        }
    }

    handleMouseDown(props, event) {
        if (props.disabled) {
            return;
        }

        if (this.props.onMouseDown) {
            this.props.onMouseDown(event);
        }
    }

    handleMouseUp(props, event) {
        if (props.disabled) {
            return;
        }

        if (this.props.onMouseUp) {
            this.props.onMouseUp(event);
        }
    }

    render() {

        let props = this.prepareProps(this.props);
        let classes = this.prepareClasses(props);
        let styles = this.prepareStyles(props);

        let renderFuncName = props.href || props.target ? 'renderAnchor' : 'renderButton';

        return this[renderFuncName](classes, props, styles);

    }

    renderAnchor(classes, props, styles) {
        var Component = props.componentClass || 'a';
        var href = props.href || '#';
        return (
            <Component
                {...props}
                href={href}
                style={styles}
                className={classSet(classes, this.props.className)}
                role='button'>
                {props.children}
            </Component>
        );
    }

    renderButton(classes, props, styles) {
        let Component = props.componentClass || 'button';
        return (
            <Component
                {...props}
                style={styles}
                className={classSet(classes, this.props.className)}>
                {props.children}
            </Component>
        );
    }

}
