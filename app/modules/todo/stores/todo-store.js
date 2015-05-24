'use strict';

import Reflux from 'reflux';
import TodoActions from '../actions/todo-actions';
import Immutable from 'immutable';

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

    getState() {
        return {
            items: this._items,
            fetched: this._fetched
        };
    },

    /**
     * @param {String} id
     */
    onRemoveTodoCompleted(id) {
        this._items = this._items.delete(id);
        this.trigger(this.getState());
    },

    /**
     * @param {Array<Object>} todos
     */
    onFetchTodosCompleted(todos) {

        let todosMap = Immutable.Map();

        for (let todo of todos) {
            todosMap = todosMap.set(todo.id, new TodoRecord(todo));
        }

        this._items = todosMap;
        this._fetched = true;
        this.trigger(this.getState());

    },

    /**
     * @param {Object} todoItem
     */
    onAddTodoCompleted(todoItem) {

        this._items = this._items.set(todoItem.id, new TodoRecord(todoItem));
        this.trigger(this.getState());
    },

    getItems() {
        return this._items;
    },

    isFetched() {
        return this._fetched;
    }

});

module.exports = TodoStore;
