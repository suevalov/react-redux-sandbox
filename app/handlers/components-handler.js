import React from 'react';
import { RouteHandler, Link } from 'react-router';

export default class extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    <li><Link to='buttons'>Buttons</Link></li>
                    <li><Link to='button-groups'>Button groups</Link></li>
                    <li><Link to='dropdown-buttons'>Dropdown Buttons</Link></li>
                </ul>
                <RouteHandler />
            </div>
        );
    }

}
