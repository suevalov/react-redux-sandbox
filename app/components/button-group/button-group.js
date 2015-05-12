'use strict';

import React from 'react';
import { ButtonGroup as BootstrapButtonGroup } from 'react-bootstrap';

require('./button-group.less');

class ButtonGroup extends React.Component {

    render() {
        return (
            <BootstrapButtonGroup {...this.props} />
        );
    }

}

export default ButtonGroup;
