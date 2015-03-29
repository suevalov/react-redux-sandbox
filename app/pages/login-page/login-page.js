'use strict';

require('./login-page.less');

import React from 'react/addons';
import Button from '../../components/button/button';
let { LinkedStateMixin } = React.addons;


export default React.createClass({

    mixins: [
        LinkedStateMixin
    ],

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

    handleSubmit(e) {
        alert('submit')
    },

    render() {
        return (
            <div className='loginPage'>
                <h2>Please, login</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type='email' placeholder='Email' valueLink={this.linkState('email')} />
                    <input type='password' placeholder='Password' valueLink={this.linkState('password')} />
                    <div>
                        <Button type='submit' theme='primary' block>Log in</Button>
                    </div>
                </form>
            </div>
        );
    }
});
