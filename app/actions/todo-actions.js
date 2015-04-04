'use strict';

import Reflux from 'reflux';
import axios from 'axios';
import { assert } from 'chai';
import Config from '../constants/config';

const TodoApiPath = Config.getApiEndpoint() + '/todos/';

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

TodoActions.addTodo.listen(function(todoText) {

    assert.isString(todoText);

    axios.post(TodoApiPath, {
        text: todoText
    })
        .then((response) => {
            this.completed(response.data);
        });

});

TodoActions.removeTodo.listen(function(id) {

    assert.isString(id);

    axios.delete(TodoApiPath + id)
        .then(() => {
            this.completed(id);
        });

});

TodoActions.fetchTodos.listen(function() {

    axios.get(TodoApiPath)
        .then((response) => {
            this.completed(response.data);
        });

});

module.exports = TodoActions;
