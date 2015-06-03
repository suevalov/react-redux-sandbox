import React from 'react';
import { FormGroup as BootstrapFormGroup }from 'react-bootstrap';

require('./form-group.less');

class FormGroup extends React.Component {

    render() {
        return (
            <BootstrapFormGroup {...this.props} />
        );
    }

}

export default FormGroup;
