'use strict';

require('./button-group.less');

import React from 'react';
import BootstrapButtonGroup from 'react-bootstrap/lib/ButtonGroup';

class ButtonGroup extends React.Component {

    render() {
        return (
            <BootstrapButtonGroup {...this.props}>
                {this.props.children}
            </BootstrapButtonGroup>
        );
    }

}

export default ButtonGroup;
