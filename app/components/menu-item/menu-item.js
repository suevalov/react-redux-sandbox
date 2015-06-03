import React from 'react';
import { MenuItem as BootstrapMenuItem } from 'react-bootstrap';

class MenuItem extends React.Component {

    render() {
        return (
            <BootstrapMenuItem {...this.props} />
        );
    }

}

export default MenuItem;
