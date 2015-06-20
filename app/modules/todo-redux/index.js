import React from 'react';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from './stores';
import TodoHandler from './handlers/todo-handler';
import { AuthRequired } from 'modules/auth';

const redux = createRedux(stores);

@AuthRequired
export default class App extends React.Component {
    render() {
        return (
          <Provider redux={redux}>
            {() => <TodoHandler />}
          </Provider>
        );
    }
}
