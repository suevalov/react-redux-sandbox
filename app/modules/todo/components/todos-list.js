import React, { PropTypes } from 'react';
import Spinner from 'react-spinkit';
import TodoItem from './todo-item';
import PureComponent from 'react-pure-render/component';
import CssTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

require('./todos-list.css');

export default class TodosList extends PureComponent {

    static propTypes = {
        todos: PropTypes.array.isRequired,
        fetched: PropTypes.bool.isRequired,
        actions: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.actions.fetchTodos();
    }

    renderSpinner() {
        return (
            <Spinner spinnerName='three-bounce'/>
        );
    }

    renderItems() {
        return (
            <ul>
                <CssTransitionGroup transitionName='todo-item-transition'>
                    {this.props.todos.map((todo) => {
                        return (
                            <TodoItem className='todo-item' {...todo} actions={this.props.actions} key={todo.id} />
                        );
                    })}
                </CssTransitionGroup>
            </ul>
        );
    }

    renderEmptyMessage() {
        return (
            <div>List is empty</div>
        );
    }

    render() {
        if (!this.props.fetched) {
            return this.renderSpinner();
        }
        if (this.props.todos.length) {
            return this.renderItems();
        }
        return this.renderEmptyMessage();
    }

}
