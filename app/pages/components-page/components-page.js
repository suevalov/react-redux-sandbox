'use strict';

import React from 'react';
import { RouteHandler, Link } from 'react-router';

let ComponentsNavigation = React.createClass({

    render() {
        return (
            <ul>
                <li><Link to='buttons'>Buttons</Link></li>
            </ul>
        );
    }

});

export default React.createClass({
    render() {
        return (
            <div>
                <ComponentsNavigation />
                <RouteHandler />
            </div>
        );
    }
});
