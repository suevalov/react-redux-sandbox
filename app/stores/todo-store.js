'use strict';

import Reflux from 'reflux';
import TodoActions from '../actions/todo-actions';
import { OrderedMap } from 'immutable';

var itemsCount = 0;

let TodoStore = Reflux.createStore({

  listenables: TodoActions,

  init() {
    this._items = new OrderedMap();
  },

  getInitialState: function () {
    return this._items;
  },

  onRemoveItem: function(id) {
    this._items = this._items.remove(id);
    this.trigger(this._items);
  },

  onAddItem: function (label) {
    let id = itemsCount++;
    this._items = this._items.set(id, {
      id: id,
      label: label
    });
    this.trigger(this._items);
  }

});

module.exports = TodoStore;
