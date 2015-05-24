'use strict';

import React, { PropTypes } from 'react';

class SidebarMenuHeader extends React.Component {

    static propTypes = {
        children: PropTypes.object
    };

    render() {
        return (
            <li className='sidebar-area__menu-header'>
                {this.props.children}
            </li>
        );
    }

}

export default SidebarMenuHeader;
