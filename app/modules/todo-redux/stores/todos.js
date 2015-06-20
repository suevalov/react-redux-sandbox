import * as ActionTypes from '../constants/action-types';

const initialState = [
    {
        id: 1,
        text: 'sample todo'
    }
];

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return [
                {
                    id: (state.length === 0) ? 0 : state[0].id + 1,
                    text: action.text
                },
                ...state
            ];
        case ActionTypes.REMOVE_TODO:
            return state.filter(todo => {
                return todo.id !== action.id;
            });
        default:
            return state;

    }

}
