import React from 'react/addons';
import AuthStore from 'modules/auth/stores/auth-store';
import { RouteActions } from 'router';
import LoginForm from 'modules/auth/components/login-form';

class LoginHandler extends React.Component {

    static willTransitionTo(transition) {
        if (AuthStore.isLoggedIn()) {
            transition.redirect('/');
        }
    }

    componentDidMount() {
        this.unsubscribe = AuthStore.listen(this.onAuthResponse, this);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onAuthResponse(state) {
        if (state.loggedIn) {
            RouteActions.transitionTo('/');
        }
    }

    render() {
        return (
            <LoginForm />
        );
    }

}

export default LoginHandler;
