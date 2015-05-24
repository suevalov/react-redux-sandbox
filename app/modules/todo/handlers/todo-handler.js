'use strict';

import React, { PropTypes } from 'react/addons';
import { Map as ImmutableMap } from 'immutable';
import TodoStore from '../stores/todo-store';
import TodoActions from '../actions/todo-actions';
import TodoList from '../components/todo-list';
import { AuthRequired } from 'modules/auth';
import bindAll from 'utils/bind-all';
import ConnectToStores from 'utils/connect-to-stores-decorator';
import {
    Button,
    Input
} from 'components/index';

function getState() {

    return {
        items: TodoStore.getItems(),
        fetched: TodoStore.isFetched()
    };

}

@AuthRequired
@ConnectToStores([
    TodoStore
], getState)
export default class TodoHandler extends React.Component {

    static propTypes = {
        items: PropTypes.instanceOf(ImmutableMap),
        fetched: PropTypes.bool
    };

    linkState = React.addons.LinkedStateMixin.linkState;

    constructor() {
        super();

        bindAll(this, 'onClickHandler');

        this.state = {
            text: ''
        };
    }

    componentDidMount() {
        TodoActions.fetchTodos();
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
