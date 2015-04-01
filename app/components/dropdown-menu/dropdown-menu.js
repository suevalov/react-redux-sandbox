'use strict';

require('./dropdown-menu.less');

import React from 'react/addons';
import BootstrapDropdownMenu from 'react-bootstrap/lib/DropdownMenu';

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
