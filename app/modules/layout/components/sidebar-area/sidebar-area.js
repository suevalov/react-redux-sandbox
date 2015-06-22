import React, { PropTypes } from 'react';
import SidebarMenuHeader from 'modules/layout/components/sidebar-area/sidebar-menu-header';
import SidebarMenuItem from 'modules/layout/components/sidebar-area/sidebar-menu-item';
import ProfileWidget from 'modules/layout/components/profile-widget/profile-widget';

require('./sidebar-area.less');

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
                    to: '/',
                    icon: 'flask',
                    special: true
                },
                {
                    label: 'Components',
                    to: '/components',
                    icon: 'flask'
                }
            ],
            selected: 0
        };
    }

    onItemClick(key) {
        this.setState({
            selected: key
        });
    }

    getSelectedIndex() {
        return this.state.selected;
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
                            <SidebarMenuItem {...item} key={index} active={index === this.getSelectedIndex()} onClick={this.onItemClick.bind(this, index)}/>
                        );
                    })}
                </ul>
            </div>
        );
    }

}

export default SidebarArea;
