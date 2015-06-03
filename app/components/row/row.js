import React from 'react';
import { Row as BootstrapRow } from 'react-bootstrap';

class Row extends React.Component {

    render() {
        return (
            <BootstrapRow {...this.props} />
        );
    }

}

export default Row;
