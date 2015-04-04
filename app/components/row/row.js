'use strict';

import React from 'react';
import BootstrapRow from 'react-bootstrap/lib/Row';

class Row extends React.Component {

    render() {
        return (
            <BootstrapRow {...this.props} />
        );
    }

}

export default Row;
