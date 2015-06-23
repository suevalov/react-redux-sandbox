import React, { PropTypes } from 'react';
import SidebarMenuHeader from 'modules/layout/components/sidebar-area/sidebar-menu-header';
import SidebarMenuItem from 'modules/layout/components/sidebar-area/sidebar-menu-item';
import ProfileWidget from 'modules/layout/components/profile-widget/profile-widget';

require('./sidebar-area.css');

class SidebarArea extends React.Component {

    static propTypes = {
        user: PropTypes.object
    };

    constructor() {
        super();

        this.state = {
            menuItems: [
                {
                    label: 'Home Page',
                    to: '/',
                    icon: 'th-large'
                },
                {
                    label: 'Special',
                    to: '/special',
                    icon: 'flask'
                },
                {
                    label: 'Components',
                    to: '/components',
                    icon: 'flask'
                }
            ]
        };
    }

    render() {
        return (
            <div className='sidebar-area'>
                <ul className='sidebar-area__menu'>
                    <SidebarMenuHeader>
                        <ProfileWidget user={this.props.user} />
                    </SidebarMenuHeader>
                    {this.state.menuItems.map((item, index) => {
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
