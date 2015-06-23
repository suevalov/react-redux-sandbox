export default function promiseAxiosMiddleware(next) {
    return (action) => {
        const { promise, types, ...rest } = action;
        if (!promise) {
            return next(action);
        }
        const [ REQUEST, SUCCESS, FAILURE ] = types;
        next({ ...rest, type: REQUEST });
        return promise.then(
            (result) => {
                next({ ...rest, type: SUCCESS, result: result.data });
            },
            (error) => {
                if (error instanceof Error) {
                    throw error;
                } else {
                    next({ ...rest, type: FAILURE, error })
                }
            }
        );
    };
}
