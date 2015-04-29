'use strict';

import Reflux from 'reflux';
import TodoActions from '../actions/todo-actions';
import Immutable from 'immutable';
import { assert } from 'chai';

let TodoRecord = Immutable.Record({
    id: null,
    text: null
});

let TodoStore = Reflux.createStore({

    listenables: TodoActions,

    init() {
        this._items = Immutable.Map();
        this._fetched = false;
    },

    getInitialState() {
        return {
            items: this._items,
            fetched: this._fetched
        };
    },

    onRemoveTodoCompleted(id) {
        assert.isString(id);
        this._items = this._items.delete(id);
        this.trigger(this.getInitialState());
    },

    onFetchTodosCompleted(todos) {

        assert.isArray(todos);

        let todosMap = Immutable.Map();

        for (let todo of todos) {
            todosMap = todosMap.set(todo.id, new TodoRecord(todo));
        }

        this._items = todosMap;
        this._fetched = true;
        this.trigger(this.getInitialState());

    },

    onAddTodoCompleted(todo) {

        assert.isObject(todo);

        this._items = this._items.set(todo.id, new TodoRecord(todo));
        this.trigger(this.getInitialState());
    }

});

module.exports = TodoStore;
