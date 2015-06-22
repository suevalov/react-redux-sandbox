import React, { PropTypes } from 'react';
import loginHandlerDecorator from 'modules/auth/decorators/login-handler-decorator';
import { connect } from 'redux/react';
import { bindActionCreators } from 'redux';
import * as AuthActions from 'modules/auth/actions/auth-actions';
import LoginForm from 'modules/auth/components/login-form';

require('./login-page.less');

@loginHandlerDecorator
@connect(({ authState }) => ({
    loggedIn: authState.loggedIn
}))
class LoginPage extends React.Component {

    static propTypes = {
        loggedIn: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    render() {

        let actions = bindActionCreators(AuthActions, this.props.dispatch);

        return (
            <div className='login-page'>
                <LoginForm actions={actions} />
            </div>
        );
    }

}


export default LoginPage;
