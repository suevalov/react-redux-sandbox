import React, { PropTypes } from 'react/addons';
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
        componentClass: PropTypes.string,
        type: PropTypes.string
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

    /*eslint-disable dot-notation */
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
    /*eslint-enable dot-notation */

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
        let Component = props.componentClass || 'a';
        let href = props.href || '#';
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
