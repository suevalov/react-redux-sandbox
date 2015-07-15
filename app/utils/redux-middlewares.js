export function logger() {
    return (next) => (action) => {
        /* eslint-disable no-console */
        console.log(action);
        return next(action);
        /* eslint-enable no-console */
    };
}

export function thunk({ dispatch, getState }) {
    return (next) => (action) => {
        return typeof action === 'function' ? action(dispatch, getState) : next(action);
    };
}
