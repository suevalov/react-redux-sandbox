'use strict';

import React from 'react';
import BootstrapMenuItem from 'react-bootstrap/lib/MenuItem';

class MenuItem extends React.Component {

    render() {
        return (
            <BootstrapMenuItem {...this.props} />
        );
    }

}

export default MenuItem;
