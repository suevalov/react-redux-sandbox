import React, { PropTypes } from 'react';

const styles = require('./profile-widget.css');

class ProfileWidget extends React.Component {

    static propTypes = {
        user: PropTypes.object
    };

    render() {
        return (
            <div className={styles.root}>
                <span className={styles.image}></span>
                <span className={styles.name}>
                    { this.props.user ? this.props.user.get('username') : '' }
                </span>
            </div>
        );
    }

}

export default ProfileWidget;
