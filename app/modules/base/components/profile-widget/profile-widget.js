import React, { PropTypes } from 'react';
import { DropdownButton, MenuItem } from 'components/index';
import i18n from 'i18n';

const styles = require('./profile-widget.css');

class ProfileWidget extends React.Component {

    static propTypes = {
        actions: PropTypes.object.isRequired,
        user: PropTypes.object
    };

    onLogoutClick = (e) => {
        e.preventDefault();
        this.props.actions.logout(this.props.authToken);
    }

    renderUserMenu() {
        if (this.props.user) {
            return (
                <div className={styles.name}>
                    <DropdownButton title={this.props.user.email}>
                        <MenuItem onClick={this.onLogoutClick}>{i18n.t('base.nav.logout')}</MenuItem>
                    </DropdownButton>
                </div>
            );
        }
        return '';
    }

    render() {
        return (
            <div className={styles.root}>
                <div className={styles.image}></div>
                { this.renderUserMenu() }
            </div>
        );
    }

}

export default ProfileWidget;
