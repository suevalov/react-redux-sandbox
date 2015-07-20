import React, { PropTypes }from 'react';
import { Link } from 'react-router';
import i18n from 'i18n';

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
                    <Link to='/'>{i18n.t('layout.nav.planner')}</Link>
                </li>
                <li><a onClick = {this.onLogoutClick}>{i18n.t('layout.nav.logout')}</a></li>
                </ul>
            </header>
        );
    }

}
