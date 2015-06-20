import { ADD_TODO, REMOVE_TODO, FETCH_TODOS } from '../constants/action-types';
import TodoApiService from 'modules/todo/services/todo-api-service';

export function addTodo(text) {
    return async (dispatch) => {
        let { data } = await TodoApiService.addTodo(text);
        dispatch({
            type: ADD_TODO,
            todo: data
        });
    };
}

export function removeTodo(id) {
    return async (dispatch) => {
        await TodoApiService.removeTodo(id);
        dispatch({
            type: REMOVE_TODO,
            id
        });
    };
}

export function fetchTodos() {
    return async (dispatch) => {
        let { data } = await TodoApiService.fetchTodos();
        dispatch({
            type: FETCH_TODOS,
            todos: data
        });
    };
}
