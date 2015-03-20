'use strict';

require('./dropdown-menu.less');

import React from 'react';

export default React.createClass({

    render() {
        return (
            <ul className='dropdown-menu'>
                <li><a href='#'>Sample 1</a></li>
                <li><a href='#'>Sample 2</a></li>
                <li><a href='#'>Sample 3</a></li>
            </ul>
        );
    }

});
