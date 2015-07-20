import React from 'react';
import { Link } from 'react-router';
import {
    Icon
} from 'components/index';
import i18n from 'i18n';

const styles = require('./sidebar-menu-item.css');

class SidebarMenuItem extends React.Component {

    static propTypes = {
        icon: React.PropTypes.string,
        to: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        onClick: React.PropTypes.func
    };

    render() {

        let icon = this.props.icon ? <Icon className={styles.icon} name={this.props.icon} /> : '';

        return (
            <li className={styles.root} onClick={this.props.onClick}>
                <Link className={styles.link} to={this.props.to}>
                    { icon }
                    <span>
                        { i18n.t(this.props.label) }
                    </span>
                </Link>
            </li>
        );
    }

}

export default SidebarMenuItem;
