import React from 'react';
import loginHandlerDecorator from 'modules/auth/decorators/login-handler-decorator';

@loginHandlerDecorator
class LoginLayout extends React.Component {

    render() {
        return (
            <div className='layout-handler layout-handler--grey'>
                { this.props.children }
            </div>
        );
    }

}

export default LoginLayout;
