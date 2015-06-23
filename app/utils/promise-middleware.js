export default function promiseMiddleware(next) {
    return (action) => {
        const { promise, types, ...rest } = action;
        if (!promise) {
            return next(action);
        }
        const [ REQUEST, SUCCESS, FAILURE ] = types;
        next({ ...rest, type: REQUEST });
        return promise.then(
            (result) => {
                next({ ...rest, type: SUCCESS, result });
            },
            (error) => {
                next({ ...rest, type: FAILURE, error });
            }
        );
    };
}
