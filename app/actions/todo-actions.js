'use strict';

import Reflux from 'reflux';
import axios from 'axios';
import { assert } from 'chai';
import Config from '../utils/config';

const TodoApiPath = Config.getApiEndpoint('/todos/');

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
        var { data } = await axios.post(TodoApiPath, {
            text: todoText
        });
        this.completed(data);
    } catch (err) {
        this.failed(err.data);
    }

});

TodoActions.removeTodo.listen(async function(id) {

    assert.isString(id);

    try {
        await axios.delete(TodoApiPath + id);
        this.completed(id);
    } catch (err) {
        this.failed(err.data);
    }

});

TodoActions.fetchTodos.listen(async function() {

    try {
        var { data } = await axios.get(TodoApiPath);
        this.completed(data);
    } catch (err) {
        this.failed(err.data);
    }

});

export default TodoActions;
