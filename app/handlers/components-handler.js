'use strict';

import React from 'react';
import { RouteHandler, Link } from 'react-router';

class ComponentsNavigation extends React.Component {

    render() {
        return (
            <ul>
                <li><Link to='buttons'>Buttons</Link></li>
                <li><Link to='button-groups'>Button groups</Link></li>
                <li><Link to='dropdown-buttons'>Dropdown Buttons</Link></li>
            </ul>
        );
    }

}

export default class ComponentsHandler extends React.Component {

    render() {
        return (
            <div>
                <ComponentsNavigation />
                <RouteHandler />
            </div>
        );
    }

}
