'use strict';

import './layout.less';
import React from 'react';
import Router from 'react-router';
import AuthStore from '../stores/auth-store';
import AuthActions from '../actions/auth-actions';

let { RouteHandler, Link  } = Router;

export default React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    getInitialState() {
        return {
            loggedIn: AuthStore.isLoggedIn()
        };
    },

    logoutClickHandler() {
        AuthActions.logout();
    },

    render() {

        var currentPath = this.context.router.getCurrentPath();

        if (currentPath === '/login') {
            return (
                <div className='layout'>
                    <RouteHandler />
                </div>
            );
        } else {
            return (
                <div className='layout'>
                    <div className='layout__nav'></div>
                    <div className='layout__content'>
                        <header>
                            <ul>
                                <li><Link to="app">Planner</Link></li>
                                <li><Link to="buttons">Buttons</Link></li>
                                { this.state.loggedIn ? (
                                    <li><a onClick={this.logoutClickHandler}>Logout</a></li>
                                ) : (
                                    ''
                                )}
                            </ul>
                        </header>
                        <RouteHandler />
                    </div>
                </div>
            );
        }



    }

});
