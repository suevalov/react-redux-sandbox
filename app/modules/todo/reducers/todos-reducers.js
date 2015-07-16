import {
    ADD_TODO, REMOVE_TODO, FETCH_TODOS, FLUSH_STATE
} from 'modules/todo/constants/action-types';
import ImmutableStore from 'immutable-store';
import createReducer from 'utils/create-reducer';

const initialState = ImmutableStore({
    todos: [],
    fetched: false
});

const handlers = {

    [ADD_TODO]: function addTodoReducer(state, action) {
        return state.todos.push(action.todo);
    },

    [REMOVE_TODO]: function removeTodoReducer(state, action) {
        return state.set('todos', state.todos.filter(todo => {
            return todo.id !== action.id;
        }));
    },

    [FETCH_TODOS]: function fetchTodosReducer(state, action) {
        return ImmutableStore({
            todos: action.todos,
            fetched: true
        });
    },

    [FLUSH_STATE]: function flushStateReducer() {
        return ImmutableStore({
            todos: [],
            fetched: false
        });
    }
};

export default createReducer(initialState, handlers);
