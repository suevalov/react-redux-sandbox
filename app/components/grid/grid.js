import React from 'react';
import { Grid as BootstrapGrid } from 'react-bootstrap';

class Grid extends React.Component {

    render() {
        return (
            <BootstrapGrid {...this.props} />
        );
    }

}

export default Grid;
