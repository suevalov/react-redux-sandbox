import { ADD_TODO, REMOVE_TODO, FETCH_TODOS } from '../constants/action-types';

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

export default function todos(state = initialState, action = null) {
    if (!action) {
        return state;
    }
    return handlers[action.type] ? handlers[action.type](state, action) : state;
}
