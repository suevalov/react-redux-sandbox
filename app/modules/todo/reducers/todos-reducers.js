import {
    ADD_TODO_SUCCESS,
    REMOVE_TODO_SUCCESS,
    FETCH_TODOS_SUCCESS,
    FLUSH_STATE
} from 'modules/todo/constants/action-types';
import ImmutableStore from 'immutable-store';
import createReducer from 'utils/create-reducer';

function getInitialState() {
    return ImmutableStore({
        todos: [],
        fetched: false
    });
}

const handlers = {

    [ADD_TODO_SUCCESS]: function addTodoReducer(state, action) {
        return state.todos.unshift(action.result);
    },

    [REMOVE_TODO_SUCCESS]: function removeTodoReducer(state, action) {
        return state.set('todos', state.todos.filter(todo => {
            return todo.id !== action.id;
        }));
    },

    [FETCH_TODOS_SUCCESS]: function fetchTodosReducer(state, action) {
        return ImmutableStore({
            todos: action.result,
            fetched: true
        });
    },

    [FLUSH_STATE]: function flushStateReducer() {
        return getInitialState();
    }
};

export default createReducer(getInitialState(), handlers);
