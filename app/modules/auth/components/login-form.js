import React, { PropTypes } from 'react';
import LinkedStateMixin from 'react/lib/LinkedStateMixin';
import {
    Button,
    Input
} from 'components/index';
import bindAll from 'utils/bind-all';

require('./login-form.css');

class LoginForm extends React.Component {

    static propTypes = {
        actions: PropTypes.object.isRequired
    };

    linkState = LinkedStateMixin.linkState;

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
        this.props.actions.login(this.state.email, this.state.password);
    }

    render() {
        return (
            <div className='login-form'>
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
