import { createRedux } from 'redux';
import authState from 'modules/auth/stores/auth-store';
import todosState from 'modules/todo/stores/todos-store';

let redux = createRedux({
    authState,
    todosState
});

export default redux;
