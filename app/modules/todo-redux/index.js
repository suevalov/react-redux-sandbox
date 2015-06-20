import React from 'react';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from './stores';
import TodoHandler from './handlers/todo-handler';

const redux = createRedux(stores);

export default class App {
    render() {
        return (
          <Provider redux={redux}>
            {() => <TodoHandler />}
          </Provider>
        );
    }
}
