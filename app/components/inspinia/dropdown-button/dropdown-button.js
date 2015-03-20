'use strict';

require('./dropdown-button.less');

import React from 'react/addons';
import Button from '../button/button';
import ButtonGroup from '../button-group/button-group';
import DropdownMenu from '../dropdown-menu/dropdown-menu';
import DropdownStateMixin from '../mixins/dropdown-state-mixin';

let { classSet } = React.addons;

export default React.createClass({

    mixins: [ DropdownStateMixin ],

    propTypes: {
        pullRight: React.PropTypes.bool,
        dropup: React.PropTypes.bool,
        title: React.PropTypes.node,
        href: React.PropTypes.string,
        onSelect: React.PropTypes.func,
        noCaret: React.PropTypes.bool
    },

    handleDropdownClick(e) {
        e.preventDefault();
        this.setDropdownState(!this.state.open);
    },

    render() {

        let caret = this.props.noCaret ?
            null : (<span className='caret' />);

        let classes = {
            'open': this.state.open
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
                <DropdownMenu></DropdownMenu>
            </ButtonGroup>
        );
    }

});
