'use strict';


import React from 'react';
import LocalStorageMixin from 'react-localstorage';

var TodoList = React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return <li>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});

export default React.createClass({

  mixins: [LocalStorageMixin],

  getInitialState() {
    return {items: [], text: ''};
  },

  onInputChange(e) {
    this.setState({text: e.target.value});
  },

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text) {
      let nextItems = this.state.items.concat([this.state.text]);
      this.setState({
        items: nextItems,
        text: ''
      });
    }
  },

  render() {
    return (
      <div>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onInputChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }

});
