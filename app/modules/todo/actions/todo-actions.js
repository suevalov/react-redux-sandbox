import Reflux from 'reflux';
import TodoApiService from 'modules/todo/services/todo-api-service';

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
TodoActions.addTodo.listen(async function addTodoAsyncHandler(todoText) {

    try {
        let { data } = await TodoApiService.addTodo(todoText);
        this.completed(data);
    } catch (err) {
        this.failed(err.data);
    }

});

/**
 * @param { String } id
 */
TodoActions.removeTodo.listen(async function removeTodoAsyncHandler(id) {

    try {
        await TodoApiService.removeTodo(id);
        this.completed(id);
    } catch (err) {
        this.failed(err.data);
    }

});

TodoActions.fetchTodos.listen(async function fetchTodosAsyncHandler() {

    try {
        let { data } = await TodoApiService.fetchTodos();
        this.completed(data);
    } catch (err) {
        this.failed(err.data);
    }

});

export default TodoActions;
