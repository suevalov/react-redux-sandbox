import React from 'react';
import { DropdownButton as BootstrapDropdownButton } from 'react-bootstrap';

require('./dropdown-button.less');

class DropdownButton extends React.Component {

    render() {
        return (
            <BootstrapDropdownButton {...this.props} />
        );
    }

}

export default DropdownButton;
