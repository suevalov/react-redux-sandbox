import React, { PropTypes } from 'react';

const styles = require('./sidebar-menu-header.css');

class SidebarMenuHeader extends React.Component {

    static propTypes = {
        children: PropTypes.object
    };

    render() {
        return (
            <li className={styles.root}>
                {this.props.children}
            </li>
        );
    }

}

export default SidebarMenuHeader;
