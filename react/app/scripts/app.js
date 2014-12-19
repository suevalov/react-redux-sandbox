/** @jsx React.DOM */

'use strict';

var React = window.React = require('react'),
    TodoApp = require('./ui/todo-app/todo-app'),
    FilteredTable = require('./ui/filtered-table/filtered-table');

var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

React.render(<TodoApp />, document.getElementById('app'));
React.render(<FilteredTable products={PRODUCTS} />, document.getElementById('filtered'));
