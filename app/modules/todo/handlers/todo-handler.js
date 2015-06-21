import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import * as TodoActions from '../actions/todo-actions';
import TodosList from '../components/todos-list';
import TodosHeader from '../components/todos-header';
import PureComponent from 'react-pure-render/component';

@connect(({ todosState }) => ({
    todos: todosState.todos,
    fetched: todosState.fetched
}))
export default class TodoHandler extends PureComponent {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        fetched: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    render() {
        const { todos, fetched, dispatch } = this.props;
        const actions = bindActionCreators(TodoActions, dispatch);
        return (
            <div>
                <TodosHeader actions={actions} />
                <TodosList todos={todos} fetched={fetched} actions={actions} />
            </div>
        );
    }

}
