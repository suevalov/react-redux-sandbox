'use strict';

import React from 'react';
import BootstrapFormGroup from 'react-bootstrap/lib/FormGroup';

require('./form-group.less');

class FormGroup extends React.Component {

    render() {
        return (
            <BootstrapFormGroup {...this.props}>
                {this.props.children}
            </BootstrapFormGroup>
        );
    }

}

export default FormGroup;
