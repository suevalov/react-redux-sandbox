import React from 'react';
import AuthStore from 'modules/auth/stores/auth-store';

require('./profile-widget.less');

class ProfileWidget extends React.Component {

    constructor() {
        super();

        this.state = {
            user: AuthStore.getUser()
        };
    }

    render() {

        if (!AuthStore.isLoggedIn()) {
            throw new Error(`Can't render ProfileWidget for unauthenticated user`);
        }

        return (
            <div className='profile-widget'>
                <span className='profile-widget__image'></span>
                <span className='profile-widget__name'>
                    { this.state.user.username }
                </span>
            </div>
        );
    }

}

export default ProfileWidget;
