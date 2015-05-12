'use strict';

import React from 'react/addons';
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
