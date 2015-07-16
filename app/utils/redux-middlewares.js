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

export function promiseMiddleware() {
    return (next) => (action) => {
        const { promise, types, ...rest } = action;
        if (!promise || !types) {
            return next(action);
        }
        const [ REQUEST, SUCCESS, FAILURE ] = types;
        next({ ...rest, type: REQUEST });
        return promise.then(
            (result) => {
                next({ ...rest, type: SUCCESS, result });
            },
            (error) => {
                if (error instanceof Error) {
                    throw error;
                } else {
                    next({ ...rest, type: FAILURE, error });
                }
            }
        );
    };
}
