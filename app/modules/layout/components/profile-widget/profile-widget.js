import React, { PropTypes } from 'react';

require('./profile-widget.css');

class ProfileWidget extends React.Component {

    static propTypes = {
        user: PropTypes.object
    };

    render() {

        return (
            <div className='profile-widget'>
                <span className='profile-widget__image'></span>
                <span className='profile-widget__name'>
                    { this.props.user ? this.props.user.username : '' }
                </span>
            </div>
        );
    }

}

export default ProfileWidget;
