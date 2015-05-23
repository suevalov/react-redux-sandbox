'use strict';

import './layout.less';
import React from 'react';
import Router from 'react-router';
import AuthStore from 'modules/auth/stores/auth-store';
import AuthActions from 'modules/auth/actions/auth-actions';
import bindAll from 'utils/bind-all';
import ContentArea from 'modules/layout/components/content-area/content-area';
import SidebarArea from 'modules/layout/components/sidebar-area/sidebar-area';

let {
    RouteHandler, Link
} = Router;

class LayoutNavigation extends React.Component {

    static contextTypes = {
        router: React.PropTypes.func
    };

    constructor() {
        super();
        bindAll(this, 'logoutClickHandler');
    }

    componentDidMount() {
        this.unsubscribe = AuthStore.listen(this.onAuthChange, this);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    logoutClickHandler() {
        AuthActions.logout(AuthStore.getToken());
    }

    onAuthChange(state) {
        if (state.loggedOut) {
            this.context.router.transitionTo('login');
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
                    loggedIn ? ( <li> <a onClick = {this.logoutClickHandler}> Logout </a></li> ) : ( '' )
                }
                </ul>
            </header>
        );
    }

}

class LayoutHandler extends React.Component {

    static contextTypes = {
        router: React.PropTypes.func
    };

    render() {

        var currentPath = this.context.router.getCurrentPath();

        if (currentPath === '/login') {

            return (
                <div className='layout-handler layout-handler--grey'>
                    <RouteHandler />
                </div>
            );

        } else {

            return (
                <div className = 'layout-handler'>
                    <div className='layout-handler__nav'>
                        <SidebarArea />
                    </div>
                    <div className='layout-handler__content'>
                        <ContentArea>
                            <LayoutNavigation />
                            <RouteHandler />
                        </ContentArea>
                    </div>
                </div>
            );

        }


    }

}

export default LayoutHandler;
