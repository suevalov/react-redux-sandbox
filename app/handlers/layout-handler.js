'use strict';

import './layout.less';
import React from 'react';
import Router from 'react-router';
import AuthStore from 'modules/auth/stores/auth-store';
import AuthActions from 'modules/auth/actions/auth-actions';
import bindAll from 'utils/bind-all';

let { RouteHandler, Link } = Router;

class LayoutNavigation extends React.Component {

    constructor() {
        super();
        bindAll(this, 'logoutClickHandler');
    }

    componentDidMount() {
        this.unsubscribe = AuthStore.listen('onAuthChange', this);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    logoutClickHandler() {
        AuthActions.logout(AuthStore.getToken());
    }

    render() {
        const loggedIn = AuthStore.isLoggedIn();

        return (
            <header>
                <ul>
                    <li><Link to='app'>Planner</Link></li>
                    { loggedIn ? (
                        <li><a onClick={this.logoutClickHandler}>Logout</a></li>
                    ) : (
                        ''
                    )}
                </ul>
            </header>
        );
    }

}

LayoutNavigation.contextTypes = {
    router: React.PropTypes.func
};

class LayoutHandler extends React.Component {

    render() {

        var currentPath = this.context.router.getCurrentPath();

        if (currentPath === '/login') {
            return (
                <div className='layout--login'>
                    <RouteHandler />
                </div>
            );
        } else {

            if (currentPath.indexOf('/components') === 0) {
                return (
                    <div className='layout--components'>
                        <RouteHandler />
                    </div>
                );
            } else {
                return (
                    <div className='layout'>
                        <div className='layout__nav'></div>
                        <div className='layout__content'>
                            <LayoutNavigation />
                            <RouteHandler />
                        </div>
                    </div>
                );
            }

        }


    }

}

LayoutHandler.contextTypes = {
    router: React.PropTypes.func
};

export default LayoutHandler;
