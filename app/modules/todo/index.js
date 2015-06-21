import React from 'react';
import { Provider } from 'redux/react';
import redux from 'app-redux';
import TodoHandler from './handlers/todo-handler';
import { AuthRequired } from 'modules/auth';

@AuthRequired
class TodoApp extends React.Component {
    render() {
        return (
          <Provider redux={redux}>
            {() => <TodoHandler />}
          </Provider>
        );
    }
}

export default {
    TodoHandler: TodoApp
};
