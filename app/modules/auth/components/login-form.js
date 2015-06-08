import React from 'react';
import AuthActions from 'modules/auth/actions/auth-actions';
import {
    Button,
    Input
} from 'components/index';
import bindAll from 'utils/bind-all';

class LoginForm extends React.Component {

    linkState = React.addons.LinkedStateMixin.linkState;

    constructor() {
        super();

        bindAll(this, 'onSubmit');

        this.state = {
            email: '',
            password: ''
        };
    }

    onSubmit(e) {
        e.preventDefault();
        AuthActions.login(this.state.email, this.state.password);
    }

    render() {
        return (
            <div className='loginPage'>
                <h2>Please, login</h2>

                <form onSubmit={this.onSubmit}>
                    <Input type='email' placeholder='Email' valueLink={this.linkState('email')}/>
                    <Input type='password' placeholder='Password' valueLink={this.linkState('password')}/>

                    <div>
                        <Button type='submit' theme='primary' block>Log in</Button>
                    </div>
                </form>
            </div>
        );
    }

}

export default LoginForm;
