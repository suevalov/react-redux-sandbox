import React, { PropTypes } from 'react';
import { connect } from 'redux/react';
import { bindActionCreators } from 'redux';
import LoginForm from 'modules/auth/components/login-form';
import LoginLayout from 'modules/auth/components/login-layout';

import * as AuthActions from 'modules/auth/actions/auth-actions';

require('./login-page.less');

@connect(({ authState }) => ({
    loggedIn: authState.loggedIn
}))
class LoginHandler extends React.Component {

    static propTypes = {
        loggedIn: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    render() {
        let actions = bindActionCreators(AuthActions, this.props.dispatch);
        return (
            <LoginForm actions={actions} />
        );
    }

}

export default {
    LoginHandler,
    LoginLayout
};
