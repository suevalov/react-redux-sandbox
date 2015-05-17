'use strict';

import React from 'react/addons';
import AuthStore from 'modules/auth/stores/auth-store';
import LoginForm from 'modules/auth/components/login-form';

class LoginHandler extends React.Component {

    static willTransitionTo(transition) {
        if (AuthStore.isLoggedIn()) {
            transition.redirect('/', {});
        }
    }

    constructor() {
        super();
    }

    componentDidMount() {
        this.unsubscribe = AuthStore.listen(this.onAuthResponse, this);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onAuthResponse(state) {
        if (state.loggedIn) {
            this.context.router.transitionTo('app');
        }
    }

    render() {
        return (
            <LoginForm />
        );
    }

}

LoginHandler.contextTypes = {
    router: React.PropTypes.func
};

export default LoginHandler;
