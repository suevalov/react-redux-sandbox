'use strict';

import React from 'react/addons';
import Reflux from 'reflux';
import TodoStore from '../stores/todo-store';
import TodoActions from '../actions/todo-actions';
import AuthenticationMixin from 'modules/auth/mixins/authentication-mixin';
import { Button } from 'components/index';
import TodoList from './todo-list';

let { LinkedStateMixin } = React.addons;

export default React.createClass({

    displayName: 'TodoApp',

    mixins: [
        Reflux.connect(TodoStore),
        AuthenticationMixin,
        LinkedStateMixin
    ],

    getInitialState() {
        return {
            text: ''
        };
    },

    componentDidMount() {
        TodoActions.fetchTodos();
    },

    onClickHandler() {
        var text = this.state.text;
        if (text) {
            TodoActions.addTodo(text);
            this.setState({
                text: ''
            });
        }
    },

    render() {
        return (
            <div>
                <TodoList items={this.state.items} spinner={!this.state.fetched}/>
                <input valueLink={this.linkState('text')}/>
                <Button theme='info' onClick={this.onClickHandler}>Click me!</Button>
            </div>
        );
    }

});
