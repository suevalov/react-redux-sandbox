import React, { PropTypes } from 'react';
import redux from 'app-redux';
import { connect, provide } from 'redux/react';
import { bindActionCreators } from 'redux';
import LoginForm from 'modules/auth/components/login-form';
import * as AuthActions from '../actions/auth-redux-actions';

@provide(redux)
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

export default LoginHandler;
