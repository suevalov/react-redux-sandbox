'use strict';


import React from 'react';
import BootstrapButtonGroup from 'react-bootstrap/lib/ButtonGroup';

require('./button-group.less');

class ButtonGroup extends React.Component {

    render() {
        return (
            <BootstrapButtonGroup {...this.props} />
        );
    }

}

export default ButtonGroup;
