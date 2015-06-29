import { ADD_TODO, REMOVE_TODO, FETCH_TODOS } from 'modules/todo/constants/action-types';
import createReducer from 'utils/create-reducer';

const initialState = {
    todos: [],
    fetched: false
};

const handlers = {

    [ADD_TODO]: function addTodoReducer(state, action) {
        state.todos = [
            action.todo,
            ...state.todos
        ];
        return state;
    },

    [REMOVE_TODO]: function removeTodoReducer(state, action) {
        return {
            ...state,
            todos: state.todos.filter(todo => {
                return todo.id !== action.id;
            })
        };
    },

    [FETCH_TODOS]: function fetchTodosReducer(state, action) {
        return {
            todos: action.todos,
            fetched: true
        };
    }
};

export default createReducer(initialState, handlers);
