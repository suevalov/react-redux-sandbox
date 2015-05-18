'use strict';

import React from 'react';
import SidebarMenuItem from 'modules/layout/components/sidebar-area/sidebar-menu-item';

require('./sidebar-area.less');

class SidebarArea extends React.Component {

    constructor() {
        super();

        this.state = {
            menuItems: [
                {
                    key: 'sidebar-home-page-menu-item',
                    label: 'Home Page',
                    to: 'app',
                    icon: 'th-large'
                },
                {
                    key: 'sidebar-components-menu-item',
                    label: 'Components',
                    to: 'components',
                    icon: 'flask'
                },
                {
                    key: 'sidebar-special-menu-item',
                    label: 'Special',
                    to: 'components',
                    icon: 'flask',
                    special: true
                }
            ]
        };
    }

    render() {
        return (
            <div className='sidebar-area'>
                <ul className='sidebar-area__menu'>
                    {this.state.menuItems.map((item) => {
                        return (
                            <SidebarMenuItem {...item} />
                        );
                    })}
                </ul>
            </div>
        );
    }

}

SidebarArea.propsTypes = {
    children: React.PropTypes.arrayOf(SidebarMenuItem)
};


export default SidebarArea;
