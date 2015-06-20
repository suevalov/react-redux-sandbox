import { ADD_TODO, REMOVE_TODO, FETCH_TODOS } from '../constants/action-types';

const initialState = [];

const handlers = {

    [ADD_TODO]: function addTodoHandler(state, action) {
        return [
            action.todo,
            ...state
        ];
    },

    [REMOVE_TODO]: function removeTodoHandler(state, action) {
        return state.filter(todo => {
            return todo.id !== action.id;
        });
    },

    [FETCH_TODOS]: function fetchTodosHandler(state, action) {
        return action.todos;
    }
};

export default function todos(state = initialState, action) {
    return handlers[action.type] ? handlers[action.type](state, action) : state;
}
