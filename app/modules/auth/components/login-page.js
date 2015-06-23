import React, { PropTypes } from 'react';
import loginHandlerDecorator from 'modules/auth/decorators/login-handler-decorator';
import { connect } from 'redux/react';
import { bindActionCreators } from 'redux';
import * as AuthActions from 'modules/auth/actions/auth-actions';
import LoginForm from 'modules/auth/components/login-form';

const styles = require('./login-page.css');

@loginHandlerDecorator
@connect(({ authState }) => ({
    requestStatus: authState.requestStatus
}))
class LoginPage extends React.Component {

    static propTypes = {
        requestStatus: PropTypes.string.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    render() {

        let actions = bindActionCreators(AuthActions, this.props.dispatch);

        return (
            <div className={styles.root}>
                <LoginForm actions={actions} status={this.props.requestStatus} />
            </div>
        );
    }

}


export default LoginPage;
