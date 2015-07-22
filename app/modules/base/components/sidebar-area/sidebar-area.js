import React, { PropTypes } from 'react';
import SidebarMenuHeader from 'modules/base/components/sidebar-area/sidebar-menu-header';
import SidebarMenuItem from 'modules/base/components/sidebar-area/sidebar-menu-item';
import ProfileWidget from 'modules/base/components/profile-widget/profile-widget';

const styles = require('./sidebar-area.css');

class SidebarArea extends React.Component {

    static propTypes = {
        actions: PropTypes.object.isRequired,
        user: PropTypes.object,
        items: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string.isRequired,
            to: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired
        })).isRequired
    };

    render() {

        return (
            <div className={styles.root}>
                <ul className={styles.menu}>
                    <SidebarMenuHeader>
                        <ProfileWidget actions={this.props.actions} user={this.props.user} />
                    </SidebarMenuHeader>
                    {this.props.items.map((item, index) => {
                        return (
                            <SidebarMenuItem {...item} key={index} />
                        );
                    })}
                </ul>
            </div>
        );
    }

}

export default SidebarArea;
