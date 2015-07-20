import React, { PropTypes } from 'react';
import SidebarMenuHeader from 'modules/base/components/sidebar-area/sidebar-menu-header';
import SidebarMenuItem from 'modules/base/components/sidebar-area/sidebar-menu-item';
import ProfileWidget from 'modules/base/components/profile-widget/profile-widget';

const styles = require('./sidebar-area.css');

class SidebarArea extends React.Component {

    static propTypes = {
        user: PropTypes.object
    };

    getItems() {
        return [
            {
                label: 'layout.sidebar.nav.home',
                to: '/',
                icon: 'th-large'
            },
            {
                label: 'layout.sidebar.nav.special',
                to: '/special',
                icon: 'flask'
            },
            {
                label: 'layout.sidebar.nav.components',
                to: '/components',
                icon: 'flask'
            }
        ];
    }

    render() {

        return (
            <div className={styles.root}>
                <ul className={styles.menu}>
                    <SidebarMenuHeader>
                        <ProfileWidget user={this.props.user} />
                    </SidebarMenuHeader>
                    {this.getItems().map((item, index) => {
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
