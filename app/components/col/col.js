'use strict';

import React from 'react';
import BootstrapCol from 'react-bootstrap/lib/Col';

class Row extends React.Component {

    render() {
        return (
            <BootstrapCol {...this.props}>
                {this.props.children}
            </BootstrapCol>
        );
    }

}

export default Row;
