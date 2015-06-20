import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import * as TodoActions from '../actions/todo-actions';
import TodosList from '../components/todos-list';
import TodosHeader from '../components/todos-header';

@connect(state => ({
    todos: state.todos
}))
export default class TodoHandler {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    render() {
        const { todos, dispatch } = this.props;
        const actions = bindActionCreators(TodoActions, dispatch);
        return (
            <div>
                <TodosHeader actions={actions} />
                <TodosList todos={todos} actions={actions} />
            </div>
        );
    }

}
