
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect, provide } from 'redux/react';
import { AuthRequired } from 'modules/auth';
import redux from 'app-redux';
import * as TodoActions from 'modules/todo/actions/todo-actions';
import TodosList from 'modules/todo/components/todos-list';
import TodosHeader from 'modules/todo/components/todos-header';

@AuthRequired
@provide(redux)
@connect(({ todosState }) => ({
    todos: todosState.todos,
    fetched: todosState.fetched
}))
class TodoHandler extends React.Component {

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
    TodoHandler: TodoHandler
};
