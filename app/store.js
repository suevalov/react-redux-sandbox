/* global __DEVELOPMENT__ */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import authReducers from 'modules/auth/reducers/auth-reducers';
import todosReducers from 'modules/todo/reducers/todos-reducers';
import { logger, thunk } from 'utils/redux-middlewares';
import { routerStateReducer } from 'redux-react-router';

const reducer = combineReducers({
    authState: authReducers,
    todosState: todosReducers,
    router: routerStateReducer
});

let finalCreateStore;

if (__DEVELOPMENT__) {

    let { devTools, persistState } = require('redux-devtools');

    finalCreateStore = compose(
        applyMiddleware(thunk, logger),
        devTools(),
        persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
        createStore
    );

} else {

    finalCreateStore = applyMiddleware(thunk, logger)(createStore);

}

const store = finalCreateStore(reducer);

export default store;
