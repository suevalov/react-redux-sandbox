import React from 'react';
import { DropdownMenu as BootstrapDropdownMenu } from 'react-bootstrap';

require('./dropdown-menu.less');

class DropdownMenu extends React.Component {

    render() {
        return (
            <BootstrapDropdownMenu {...this.props} />
        );
    }

}

export default DropdownMenu;
