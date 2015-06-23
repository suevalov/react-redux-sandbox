import React, { PropTypes } from 'react';

require('./sidebar-menu-header.less');

class SidebarMenuHeader extends React.Component {

    static propTypes = {
        children: PropTypes.object
    };

    render() {
        return (
            <li className='sidebar-menu-header'>
                {this.props.children}
            </li>
        );
    }

}

export default SidebarMenuHeader;
