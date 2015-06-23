import React from 'react';
import { Link } from 'react-router';
import {
    Icon
} from 'components/index';

require('./sidebar-menu-item.css');

class SidebarMenuItem extends React.Component {

    static propTypes = {
        icon: React.PropTypes.string,
        to: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        onClick: React.PropTypes.func
    };

    render() {
        return (
            <li className='sidebar-menu-item' onClick={this.props.onClick}>
                <Link className='sidebar-menu-item__link' to={this.props.to}>
                    { this.props.icon ? ( <Icon className='sidebar-menu-item__link-icon' name={this.props.icon} /> ) : '' }
                    <span className='sidebar-area__menu-item-label'>
                        {this.props.label}
                    </span>
                </Link>
            </li>
        );
    }

}

export default SidebarMenuItem;
