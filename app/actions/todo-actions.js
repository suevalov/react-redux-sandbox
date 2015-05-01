'use strict';

import Reflux from 'reflux';
import { assert } from 'chai';
import API from '../utils/api';

let TodoActions = Reflux.createActions({
    addTodo: {
        asyncResult: true
    },
    removeTodo: {
        asyncResult: true
    },
    fetchTodos: {
        asyncResult: true
    }
});

TodoActions.addTodo.listen(async function(todoText) {

    assert.isString(todoText);

    try {
        var { data } = await API.todos().add(todoText);
        this.completed(data);
    } catch (err) {
        this.failed(err.data);
    }

});

TodoActions.removeTodo.listen(async function(id) {

    assert.isString(id);

    try {
        await API.todos().remove(id);
        this.completed(id);
    } catch (err) {
        this.failed(err.data);
    }

});

TodoActions.fetchTodos.listen(async function() {

    try {
        var { data } = await API.todos().fetch();
        this.completed(data);
    } catch (err) {
        this.failed(err.data);
    }

});

export default TodoActions;
