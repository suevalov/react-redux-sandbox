import React from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';
import * as TodoActions from '../actions/todo-actions';
import TodosList from '../components/todos-list';

export default class TodoApp {

    renderChild({ todos, dispatch }) {
        const actions = bindActionCreators(TodoActions, dispatch);
        return (
          <div>
            <TodosList todos={todos} actions={actions} />
          </div>
        );
    }

    render() {
        return (
          <Connector select={state => ({ todos: state.todos })}>
            {this.renderChild}
          </Connector>
        );
    }

}
