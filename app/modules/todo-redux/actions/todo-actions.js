import * as ActionTypes from '../constants/action-types';

export function addTodo(text) {
    return {
        type: ActionTypes.ADD_TODO,
        text
    };
}

export function removeTodo(id) {
    return {
        type: ActionTypes.REMOVE_TODO,
        id
    };
}
