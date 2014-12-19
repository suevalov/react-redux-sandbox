/** @jsx React.DOM */

'use strict';

var React = window.React = require('react'),
    TodoApp = require('./ui/todo-app/todo-app');

React.renderComponent(<TodoApp />, document.getElementById('app'));
