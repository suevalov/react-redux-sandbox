'use strict';

var React = require('react');

var TodoList = React.createClass({
    render: function() {
        var createItem = function(itemText) {
            return <li>{itemText}</li>;
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
});

var TodoApp = React.createClass({
    getInitialState: function() {
        return {items: [], text: ''};
    },
    onChange: function(e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([this.state.text]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
    },
    render: function() {
        return (
            <div>
                <h3>Application</h3>
                <TodoList items={this.state.items} />
                    <input onChange={this.onChange} value={this.state.text} />
                    <button onClick={this.handleSubmit}>{'Add #' + (this.state.items.length + 1)}</button>
            </div>
        );
    }
});

module.exports = TodoApp;
