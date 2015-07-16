import React, { PropTypes } from 'react';
import Spinner from 'react-spinkit';
import TodoItem from './todo-item';
import PureComponent from 'react-pure-render/component';
import CssTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

let styles = require('./todos-list.css');

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
                <CssTransitionGroup transitionName='todo-item-transition' transitionAppear={true}>
                    {this.props.todos.map((todo, index) => {
                        return (
                            <TodoItem {...todo} actions={this.props.actions} key={index} />
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

        let content;

        if (!this.props.fetched) {
            content = this.renderSpinner();
        } else {
            if (this.props.todos.length) {
                content = this.renderItems();
            } else {
                content = this.renderEmptyMessage();
            }
        }

        return (
            <div className={styles.root}>
                { content }
            </div>
        );
    }

}
