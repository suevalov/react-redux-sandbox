'use strict';

require('./login-page-view.less');

import React from 'react/addons';
import Reflux from 'reflux';
import AuthActions from 'modules/auth/actions/auth-actions';
import AuthStore from 'modules/auth/stores/auth-store';
import { redirectWhenLoggedIn } from 'modules/auth';
import {
    Button,
    Input
} from 'components/index';

let { LinkedStateMixin } = React.addons;

export default React.createClass({
    displayName: 'LoginPage',

    mixins: [
        Reflux.listenTo(AuthStore, 'onAuthResponse'),
        LinkedStateMixin
    ],

    statics: {
        willTransitionTo: redirectWhenLoggedIn
    },

    contextTypes: {
        router: React.PropTypes.func
    },

    getInitialState() {
        return {
            email: '',
            password: ''
        };
    },

    componentDidMount() {
        document.body.className = 'grey';
    },

    componentWillUnmount() {
        document.body.className = '';
    },

    onAuthResponse(state) {
        if (state.loggedIn) {
            this.context.router.transitionTo('app');
        }
    },

    handleSubmit(e) {
        e.preventDefault();
        AuthActions.login(this.state.email, this.state.password);
    },

    render() {
        return (
            <div className='loginPage'>
                <h2>Please, login</h2>

                <form onSubmit={this.handleSubmit}>
                    <Input type='email' placeholder='Email' valueLink={this.linkState('email')}/>
                    <Input type='password' placeholder='Password' valueLink={this.linkState('password')}/>

                    <div>
                        <Button type='submit' theme='primary' block>Log in</Button>
                    </div>
                </form>
            </div>
        );
    }
});
