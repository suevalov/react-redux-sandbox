import { createRedux } from 'redux';
import authReducers from 'modules/auth/reducers/auth-reducers';
import todosReducers from 'modules/todo/reducers/todos-reducers';

let redux = createRedux({
    authState: authReducers,
    todosState: todosReducers
});

export default redux;
