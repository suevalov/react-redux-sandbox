'use strict';

import React from 'react';
import { RouteHandler, Link } from 'react-router';

let ComponentsNavigation = React.createClass({

    displayName: 'ComponentsNavigation',

    render() {
        return (
            <ul>
                <li><Link to='buttons'>Buttons</Link></li>
                <li><Link to='button-groups'>Button groups</Link></li>
                <li><Link to='dropdown-buttons'>Dropdown Buttons</Link></li>
            </ul>
        );
    }

});

export default React.createClass({

    displayName: 'ComponentsPage',

    render() {
        return (
            <div>
                <ComponentsNavigation />
                <RouteHandler />
            </div>
        );
    }
});
