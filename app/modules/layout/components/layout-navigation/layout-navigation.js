import React from 'react';
import { Link } from 'react-router';
import { RouteActions } from 'router';
import AuthStore from 'modules/auth/stores/auth-store';
import AuthActions from 'modules/auth/actions/auth-actions';
import bindAll from 'utils/bind-all';

export default class LayoutNavigation extends React.Component {

    constructor() {
        super();
        bindAll(this, 'onLogoutClick');
    }

    componentDidMount() {
        this.unsubscribe = AuthStore.listen(this.onAuthChange, this);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onLogoutClick() {
        AuthActions.logout(AuthStore.getToken());
    }

    onAuthChange(state) {
        if (state.loggedOut) {
            RouteActions.transitionTo('/login');
        }
    }

    render() {
        const loggedIn = AuthStore.isLoggedIn();

        return (
            <header>
                <ul>
                <li>
                    <Link to='app'>Planner</Link>
                </li>
                {
                    loggedIn ? ( <li> <a onClick = {this.onLogoutClick}> Logout </a></li> ) : ( '' )
                }
                </ul>
            </header>
        );
    }

}
