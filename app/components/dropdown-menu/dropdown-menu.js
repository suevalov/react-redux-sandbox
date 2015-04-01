'use strict';

import React from 'react/addons';
import BootstrapDropdownMenu from 'react-bootstrap/lib/DropdownMenu';

require('./dropdown-menu.less');

class DropdownMenu extends React.Component {

    render() {
        return (
            <BootstrapDropdownMenu {...this.props}>
                {this.props.children}
            </BootstrapDropdownMenu>
        );
    }

}

export default DropdownMenu;
