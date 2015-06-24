import { ADD_TODO, REMOVE_TODO, FETCH_TODOS } from '../constants/action-types';

const initialState = {
    todos: [],
    fetched: false
};

const handlers = {

    [ADD_TODO]: function addTodoHandler(state, action) {
        state.todos = [
            action.todo,
            ...state.todos
        ];
        return state;
    },

    [REMOVE_TODO]: function removeTodoHandler(state, action) {
        return {
            ...state,
            todos: state.todos.filter(todo => {
                return todo.id !== action.id;
            })
        };
    },

    [FETCH_TODOS]: function fetchTodosHandler(state, action) {
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
