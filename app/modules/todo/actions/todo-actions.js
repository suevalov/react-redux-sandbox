'use strict';

import Reflux from 'reflux';
import API from 'utils/api';

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

/**
 * @param { String } todoText
 */
TodoActions.addTodo.listen(async function(todoText) {

    try {
        var { data } = await API.todos().add(todoText);
        this.completed(data);
    } catch (err) {
        this.failed(err.data);
    }

});

/**
 * @param { String } id
 */
TodoActions.removeTodo.listen(async function(id) {

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
