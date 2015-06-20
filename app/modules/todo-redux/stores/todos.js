import { ADD_TODO, REMOVE_TODO } from '../constants/action-types';

const initialState = [
    {
        id: 1,
        text: 'Sample Todo'
    }
];

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                {
                    id: (state.length === 0) ? 0 : state.length + 1,
                    text: action.text
                },
                ...state
            ];
        case REMOVE_TODO:
            return state.filter(todo => {
                return todo.id !== action.id;
            });
        default:
            return state;

    }

}
