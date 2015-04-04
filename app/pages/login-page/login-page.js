'use strict';

require('./login-page.less');

import React from 'react/addons';
import Reflux from 'reflux';
import AuthActions from '../../actions/auth-actions';
import AuthStore from '../../stores/auth-store';
import {
    Button,
    Input
} from '../../components/index';

let { LinkedStateMixin } = React.addons;

export default React.createClass({

    mixins: [
        LinkedStateMixin,
        Reflux.listenTo(AuthStore, 'onAuthResponse')
    ],

    contextTypes: {
        router: React.PropTypes.func
    },

    statics: {
        willTransitionTo(transition) {
            if (AuthStore.isLoggedIn()) {
                transition.redirect('/', {});
            }
        }
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
        } else {
            alert('Wrong');
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
                    <Input type='email' placeholder='Email' valueLink={this.linkState('email')} />
                    <Input type='password' placeholder='Password' valueLink={this.linkState('password')} />
                    <div>
                        <Button type='submit' theme='primary' block>Log in</Button>
                    </div>
                </form>
            </div>
        );
    }
});
