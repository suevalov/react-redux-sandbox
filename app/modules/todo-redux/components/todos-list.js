import React, { PropTypes } from 'react';

export default class TodosList extends React.Components {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    };

    render() {
        return (
            <ul>
                {this.props.todos.map((todo) => {
                    return (
                        <div>{todo.text}</div>
                    );
                })}
            </ul>
        );
    }

}
