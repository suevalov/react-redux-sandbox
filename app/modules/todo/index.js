
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import * as TodoActions from 'modules/todo/actions/todo-actions';
import TodosList from 'modules/todo/components/todos-list';
import TodosHeader from 'modules/todo/components/todos-header';

@connect(({ todosState }) => ({
    todos: todosState.todos,
    fetched: todosState.fetched
}))
class TodoPage extends React.Component {

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

export default {
    TodoPage
};
