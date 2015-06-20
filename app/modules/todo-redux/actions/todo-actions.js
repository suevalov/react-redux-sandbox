import { ADD_TODO, REMOVE_TODO } from '../constants/action-types';

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    };
}

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id
    };
}
