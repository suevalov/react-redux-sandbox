'use strict';

require('./dropdown-button.less');

import React from 'react/addons';
import Button from '../button/button';
import ButtonGroup from '../button-group/button-group';
import DropdownMenu from '../dropdown-menu/dropdown-menu';
import DropdownStateMixin from '../mixins/dropdown-state-mixin';
import ValidComponentChildren from '../utils/valid-component-children';
import createChainedFunction from '../utils/create-chained-function';
import classSet from 'classnames';

let { cloneWithProps } = React.addons;

export default React.createClass({

    mixins: [ DropdownStateMixin ],

    propTypes: {
        pullRight: React.PropTypes.bool,
        dropup: React.PropTypes.bool,
        title: React.PropTypes.node,
        href: React.PropTypes.string,
        onClick:   React.PropTypes.func,
        onSelect: React.PropTypes.func,
        noCaret: React.PropTypes.bool
    },

    handleDropdownClick(e) {
        e.preventDefault();
        this.setDropdownState(!this.state.open);
    },

    handleOptionSelect(key) {
        if (this.props.onSelect) {
            this.props.onSelect(key);
        }
        this.setDropdownState(false);
    },

    render() {

        let caret = this.props.noCaret ?
            null : (<span className='caret' />);

        let classes = {
            'open': this.state.open,
            'dropup': this.props.dropup
        };

        return (
            <ButtonGroup className={classSet(classes)}>
                <Button {...this.props} className='dropdown-toggle'
                    onClick={this.handleDropdownClick}>
                    {this.props.title}
                    &nbsp;
                    &nbsp;
                    {caret}
                </Button>
                <DropdownMenu
                    ref='menu'
                    aria-labelledby={this.props.id}
                    pullRight={this.props.pullRight}
                    key={1}
                    >
                    {ValidComponentChildren.map(this.props.children, this.renderMenuItem)}
                </DropdownMenu>
            </ButtonGroup>
        );
    },

    renderMenuItem(child, index) {

        let handleOptionSelect = this.props.onSelect || child.props.onSelect ?
            this.handleOptionSelect : null;

        return cloneWithProps(
            child,
            {
                onSelect: createChainedFunction(child.props.onSelect, handleOptionSelect),
                key: child.key ? child.key : index,
                ref: child.ref
            }
        );

    }

});
