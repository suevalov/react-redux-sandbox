import React from 'react';
import { Col as BootstrapCol } from 'react-bootstrap';

class Row extends React.Component {

    render() {
        return (
            <BootstrapCol {...this.props} />
        );
    }

}

export default Row;
