'use strict';

import './layout.less';
import React from 'react';
import Router from 'react-router';

let { RouteHandler, Link  } = Router;

export default React.createClass({

    render() {
        return (
            <div className='layout'>
                <div className='layout__nav'></div>
                <div className='layout__content'>
                    <header>
                        <ul>
                            <li><Link to="app">Planner</Link></li>
                            <li><Link to="buttons">Buttons</Link></li>
                        </ul>
                    </header>
                    <RouteHandler />
                </div>
            </div>
        );
    }

});
