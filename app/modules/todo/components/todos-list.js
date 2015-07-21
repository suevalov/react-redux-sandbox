import React, { PropTypes } from 'react';
import Spinner from 'react-spinkit';
import TodoItem from './todo-item';
import PureComponent from 'react-pure-render/component';
import CssTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import i18n from 'i18n';

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
            <div>
                <CssTransitionGroup transitionName='todo-item-transition' transitionAppear={true}>
                    {this.props.todos.map((todo) => {
                        return (
                            <TodoItem {...todo} actions={this.props.actions} key={todo.id} />
                        );
                    })}
                </CssTransitionGroup>
            </div>
        );
    }

    renderEmptyMessage() {
        return (
            <div>{ i18n.t('todos.list-is-empty') }</div>
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
