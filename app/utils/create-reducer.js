export default function createReducer(initialState, handlers) {

    return (state = initialState, action) => {
        if (!action) {
            return state;
        }
        return handlers[action.type] ? handlers[action.type](state, action) : state;
    };

}
