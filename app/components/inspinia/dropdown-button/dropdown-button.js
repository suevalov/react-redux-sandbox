'use strict';

require('./dropdown-button.less');

import React from 'react';
import Button from '../button/button';

let { PropTypes } = React;

export default React.createClass({

    propTypes: {
        pullRight: PropTypes.bool,
        dropup: PropTypes.bool,
        title: PropTypes.node,
        href: PropTypes.string,
        onClick: PropTypes.func,
        onSelect: PropTypes.func,
        noCaret: PropTypes.bool
    },

    handleDropdownClick() {
        alert('click on dropdown');
    },

    render() {

        var caret = this.props.noCaret ?
            null : (<span className='caret' />);

        return (
            <Button
                {...this.props}
                ref='dropdownButton'
                className='dropdown-toggle'
                onClick={this.handleDropdownClick}>
                {this.props.title}
                &nbsp;
                {caret}
            </Button>
        );
    }

});
