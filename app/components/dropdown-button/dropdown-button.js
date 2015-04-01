'use strict';

require('./dropdown-button.less');

import React from 'react/addons';
import BootstrapDropdownButton from 'react-bootstrap/lib/DropdownButton';

class DropdownButton extends React.Component {

    render() {
        return (
            <BootstrapDropdownButton {...this.props}>
                {this.props.children}
            </BootstrapDropdownButton>
        );
    }

}

export default DropdownButton;
