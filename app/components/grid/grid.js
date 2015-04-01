'use strict';

import React from 'react';
import BootstrapGrid from 'react-bootstrap/lib/Grid';

class Grid extends React.Component {

    render() {
        return (
            <BootstrapGrid {...this.props}>
                {this.props.children}
            </BootstrapGrid>
        );
    }

}

export default Grid;
