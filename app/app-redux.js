import { createRedux } from 'redux';
import authState from 'modules/auth/stores/auth-redux-store';
import todosState from 'modules/todo/stores/todos';

let redux = createRedux({
    authState,
    todosState
});

export default redux;
