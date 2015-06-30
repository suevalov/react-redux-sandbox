import {
    ADD_TODO, REMOVE_TODO, FETCH_TODOS, FLUSH_STATE
} from 'modules/todo/constants/action-types';
import Immutable from 'immutable';
import createReducer from 'utils/create-reducer';

const initialState = Immutable.fromJS({
    todos: [],
    fetched: false
});

const handlers = {

    [ADD_TODO]: function addTodoReducer(state, action) {
        let newTodos = state.get('todos').push(Immutable.fromJS(action.todo));
        return state.set('todos', newTodos);
    },

    [REMOVE_TODO]: function removeTodoReducer(state, action) {
        let newTodos = state.get('todos').filter(todo => {
            return todo.get('id') !== action.id;
        });
        return state.set('todos', newTodos);
    },

    [FETCH_TODOS]: function fetchTodosReducer(state, action) {
        return Immutable.fromJS({
            todos: action.todos,
            fetched: true
        });
    },

    [FLUSH_STATE]: function flushStateReducer() {
        return Immutable.fromJS({
            todos: [],
            fetched: false
        });
    }
};

export default createReducer(initialState, handlers);
