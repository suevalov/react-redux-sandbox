import React, { PropTypes } from 'react';

require('./profile-widget.less');

class ProfileWidget extends React.Component {

    static propTypes = {
        user: PropTypes.object.isRequired
    };

    render() {

        return (
            <div className='profile-widget'>
                <span className='profile-widget__image'></span>
                <span className='profile-widget__name'>
                    { this.props.user.username }
                </span>
            </div>
        );
    }

}

export default ProfileWidget;
