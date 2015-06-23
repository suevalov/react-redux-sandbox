import React from 'react';
import { Link } from 'react-router';
import classSet from 'classnames';
import {
    Icon
} from 'components/index';

require('./sidebar-menu-item.css');

class SidebarMenuItem extends React.Component {

    static propTypes = {
        icon: React.PropTypes.string,
        active: React.PropTypes.bool,
        special: React.PropTypes.bool,
        to: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        onClick: React.PropTypes.func
    };

    render() {

        let classes = {
            'sidebar-menu-item': true,
            'sidebar-menu-item--active': this.props.active,
            'sidebar-menu-item--special': this.props.special
        };

        return (
            <li className={classSet(classes)} onClick={this.props.onClick}>
                <Link to={this.props.to}>
                    { this.props.icon ? ( <Icon name={this.props.icon} /> ) : '' }
                    <span className='sidebar-area__menu-item-label'>
                        {this.props.label}
                    </span>
                </Link>
            </li>
        );
    }

}

export default SidebarMenuItem;
