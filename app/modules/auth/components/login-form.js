import React, { PropTypes } from 'react';
import LinkedStateMixin from 'react/lib/LinkedStateMixin';
import {
    RequestButton,
    Input
} from 'components/index';
import i18n from 'i18n';

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
                <h2>{ i18n.t('auth.header')}</h2>

                <form onSubmit={this.onSubmit}>
                    <Input type='email' placeholder={ i18n.t('auth.placeholders.email') } valueLink={this.linkState('email')}/>
                    <Input type='password' placeholder={ i18n.t('auth.placeholders.password')} valueLink={this.linkState('password')}/>
                    <RequestButton status={this.props.status} className={styles.submitButton} type='submit' theme='primary'>
                        { i18n.t('auth.buttons.login') }
                    </RequestButton>
                </form>
            </div>
        );
    }

}

export default LoginForm;
