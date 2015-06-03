import React from 'react';
import { Input as BootstrapInput } from 'react-bootstrap';

class Input extends React.Component {

    render() {
        return (
            <BootstrapInput {...this.props} />
        );
    }

}

export default Input;
