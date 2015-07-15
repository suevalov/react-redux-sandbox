import { createStore, combineReducers, applyMiddleware } from 'redux';
import authReducers from 'modules/auth/reducers/auth-reducers';
import todosReducers from 'modules/todo/reducers/todos-reducers';
import { logger, thunk } from 'utils/redux-middlewares';

const reducer = combineReducers({
    authState: authReducers,
    todosState: todosReducers
});

const finalCreateStore = applyMiddleware(thunk, logger)(createStore);
const store = finalCreateStore(reducer);

export default store;
