/* global __DEVELOPMENT__ */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import authReducers from 'modules/auth/reducers/auth-reducers';
import todosReducers from 'modules/todo/reducers/todos-reducers';
import localeReducers from 'modules/base/reducers/locale-reducers';
import { logger, thunk, promiseMiddleware } from 'utils/redux-middlewares';

const reducer = combineReducers({
    authState: authReducers,
    todosState: todosReducers,
    localeState: localeReducers
});

let finalCreateStore;

if (__DEVELOPMENT__) {

    let { devTools, persistState } = require('redux-devtools');

    finalCreateStore = compose(
        applyMiddleware(thunk, promiseMiddleware, logger),
        devTools(),
        persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
        createStore
    );

} else {

    finalCreateStore = applyMiddleware(thunk, promiseMiddleware, logger)(createStore);

}

const store = finalCreateStore(reducer);

export default store;
