import { ADD_TODO, REMOVE_TODO, FETCH_TODOS } from '../constants/action-types';
import todoApiService from '../services/todo-api-service';

export function addTodo(text) {
    return async (dispatch) => {
        let { data } = await todoApiService.addTodo(text);
        dispatch({
            type: ADD_TODO,
            todo: data
        });
    };
}

export function removeTodo(id) {
    return async (dispatch) => {
        await todoApiService.removeTodo(id);
        dispatch({
            type: REMOVE_TODO,
            id
        });
    };
}

export function fetchTodos() {
    return async (dispatch) => {
        let { data } = await todoApiService.fetchTodos();
        dispatch({
            type: FETCH_TODOS,
            todos: data
        });
    };
}
