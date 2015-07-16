import {
    ADD_TODO,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAIL,
    REMOVE_TODO,
    REMOVE_TODO_SUCCESS,
    REMOVE_TODO_FAIL,
    FETCH_TODOS,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAIL
} from '../constants/action-types';
import todoApiService from '../services/todo-api-service';
import sortByOrder from 'lodash/collection/sortByOrder';
import { promiseMiddleware } from 'utils/redux-middlewares';

export function addTodo(text) {
    return (dispatch) => {
        promiseMiddleware(dispatch)({
            types: [ ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_FAIL ],
            promise: todoApiService.addTodo(text)
        });
    };
}

export function removeTodo(id) {
    return (dispatch) => {
        promiseMiddleware(dispatch)({
            id,
            types: [ REMOVE_TODO, REMOVE_TODO_SUCCESS, REMOVE_TODO_FAIL ],
            promise: todoApiService.removeTodo(id)
        });
    };
}

export function fetchTodos() {
    return (dispatch) => {
        promiseMiddleware(dispatch)({
            types: [ FETCH_TODOS, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAIL ],
            promise: todoApiService.fetchTodos()
                        .then(todos => {
                            return sortByOrder(todos, [ 'createdAt' ], [ 'desc']);
                        })
        });
    };
}
