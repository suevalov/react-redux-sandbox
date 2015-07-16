import React, { PropTypes } from 'react';
import LinkedStateMixin from 'react/lib/LinkedStateMixin';
import {
    RequestButton,
    Input
} from 'components/index';

const styles = require('./login-form.css');

class LoginForm extends React.Component {

    static propTypes = {
        actions: PropTypes.object.isRequired,
        status: PropTypes.string.isRequired
    };

    linkState = LinkedStateMixin.linkState;

    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.actions.login(this.state.email, this.state.password);
    }

    render() {

        return (
            <div className={styles.root}>
                <h2>Please, login</h2>

                <form onSubmit={this.onSubmit}>
                    <Input type='email' placeholder='Email' valueLink={this.linkState('email')}/>
                    <Input type='password' placeholder='Password' valueLink={this.linkState('password')}/>
                    <RequestButton status={this.props.status} className={styles.submitButton} type='submit' theme='primary'>Log in</RequestButton>
                </form>
            </div>
        );
    }

}

export default LoginForm;
