import React, { PropTypes }from 'react';
import { Link } from 'react-router';

export default class LayoutNavigation extends React.Component {

    static propTypes = {
        actions: PropTypes.object.isRequired,
        authToken: PropTypes.string
    };

    onLogoutClick = () => {
        this.props.actions.logout(this.props.authToken);
    }

    render() {
        return (
            <header>
                <ul>
                <li>
                    <Link to='/'>Planner</Link>
                </li>
                <li> <a onClick = {this.onLogoutClick}> Logout </a></li>
                </ul>
            </header>
        );
    }

}
