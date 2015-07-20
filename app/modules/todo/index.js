
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from 'modules/todo/actions/todo-actions';
import TodosList from 'modules/todo/components/todos-list';
import TodosHeader from 'modules/todo/components/todos-header';

@connect(({ todosState }) => ({
    todosState
}))
class TodoPage extends React.Component {

    static propTypes = {
        todosState: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    render() {

        const actions = bindActionCreators(TodoActions, this.props.dispatch);
        let { todos, fetched } = this.props.todosState;

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
