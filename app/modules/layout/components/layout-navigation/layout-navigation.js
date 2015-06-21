import React, { PropTypes }from 'react';
import { Link } from 'react-router';
import bindAll from 'utils/bind-all';

export default class LayoutNavigation extends React.Component {

    static propTypes = {
        actions: PropTypes.object.isRequired,
        loggedIn: PropTypes.bool.isRequired,
        authToken: PropTypes.string
    };

    constructor() {
        super();
        bindAll(this, 'onLogoutClick');
    }

    onLogoutClick() {
        this.props.actions.logout(this.props.authToken);
    }

    render() {
        return (
            <header>
                <ul>
                <li>
                    <Link to='app'>Planner</Link>
                </li>
                {
                    this.props.loggedIn ? ( <li> <a onClick = {this.onLogoutClick}> Logout </a></li> ) : ( '' )
                }
                </ul>
            </header>
        );
    }

}
