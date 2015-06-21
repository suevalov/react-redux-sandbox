import { createRedux } from 'redux';
import authState from './stores/auth-redux-store';

let redux = createRedux({
    authState
});

export default redux;
