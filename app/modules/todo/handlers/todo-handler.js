'use strict';

import React from 'react/addons';
import { Map as ImmutableMap } from 'immutable';
import TodoStore from '../stores/todo-store';
import TodoActions from '../actions/todo-actions';
import TodoList from '../components/todo-list';
import { authRequired } from 'modules/auth';
import bindAll from 'utils/bind-all';
import {
    Button,
    Input
} from 'components/index';

class TodoHandler extends React.Component {

    static willTransitionTo = authRequired;

    linkState = React.addons.LinkedStateMixin.linkState;

    constructor() {
        super();

        bindAll(this, 'onClickHandler');

        this.state = {
            text: ''
        };
    }

    onClickHandler() {
        var text = this.state.text;
        if (text) {
            TodoActions.addTodo(text);
            this.setState({
                text: ''
            });
        }
    }

    render() {
        return (
            <div>
                <TodoList items={this.props.items} spinner={!this.props.fetched}/>
                <Input type='text' valueLink={this.linkState('text')}/>
                <Button theme='info' onClick={this.onClickHandler}>Click me!</Button>
            </div>
        );
    }

}

TodoHandler.propTypes = {
    items: React.PropTypes.instanceOf(ImmutableMap),
    fetched: React.PropTypes.bool
};

export default class extends React.Component {

    constructor() {
        super();
        this.state = TodoStore.getInitialState();
        this.unsubscribe = TodoStore.listen(this.setState, this);
        TodoActions.fetchTodos();
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <TodoHandler items={this.state.items} fetched={this.state.fetched}/>
        );
    }

}
