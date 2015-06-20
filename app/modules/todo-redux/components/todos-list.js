import React, { PropTypes } from 'react';
import TodoItem from './todo-item';

export default class TodosList extends React.Component {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    };

    render() {
        return (
            <ul>
                {this.props.todos.map((todo) => {
                    return (
                        <TodoItem {...todo} actions={this.props.actions} key={todo.id} />
                    );
                })}
            </ul>
        );
    }

}
