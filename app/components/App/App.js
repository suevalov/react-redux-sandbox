'use strict';

import './app.less';
import React from 'react';
import Router from 'react-router';
import TodoApp from '../todo-app/todo-app';

let { RouteHandler, Link  } = Router;

export default React.createClass({

  render() {
    return (
      <div className='app-component'>
        <header>
          <ul>
            <li><Link to="app">Dashboard</Link></li>
            <li><Link to="inbox">Inbox</Link></li>
            <li><Link to="calendar">Calendar</Link></li>
          </ul>
          Logged as Jane
        </header>
        <RouteHandler />
      </div>
    );
  }

});
