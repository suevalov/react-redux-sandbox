'use strict';


import React from 'react/addons';
import Reflux from 'reflux';
import Immutable from 'immutable';
import TodoStore from '../../stores/todo-store';
import AuthStore from '../../stores/auth-store';
import TodoActions from '../../actions/todo-actions';
import Spinner from 'react-spinkit';
import {
    Button,
    Icon
} from '../../components/index';

let { PureRenderMixin, LinkedStateMixin } = React.addons;

var TodoItem = React.createClass({

    displayName: 'TodoItem',

    mixins: [
        PureRenderMixin
    ],

    propTypes: {
        id: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired
    },

    clickHandler(e) {
        e.preventDefault();
        TodoActions.removeTodo(this.props.id);
    },

    render() {
        return (
            <li>
                {this.props.text}
                &nbsp;
                <Button theme='danger' size='xsmall' onClick={this.clickHandler}>
                    <Icon name='remove'/>
                    &nbsp;
                    Remove
                </Button>
            </li>
        );
    }

});

var TodoList = React.createClass({

    propTypes: {
        items: React.PropTypes.instanceOf(Immutable.Map),
        spinner: React.PropTypes.bool.isRequired
    },

    render() {
        if (this.props.spinner) {
            return (
                <Spinner spinnerName='three-bounce' />
            );
        } else {
            if (this.props.items.count()) {
                return (
                    <ul>
                        {this.props.items.map((item) => {
                            return (
                                <TodoItem {...item.toJS()} />
                            );
                        })}
                    </ul>
                );
            } else {
                return (
                    <div>Todo list is empty</div>
                );
            }
        }
    }

});

export default React.createClass({

    displayName: 'TodoApp',

    mixins: [
        Reflux.listenTo(TodoStore, 'onTodoStoreChange'),
        PureRenderMixin,
        LinkedStateMixin
    ],

    statics: {
        willTransitionTo(transition) {
            if (!AuthStore.isLoggedIn()) {
                let options = {};
                if (transition.path !== '' && transition.path !== '/') {
                    options.nextPath = transition.path;
                }
                transition.redirect('/login', {}, options);
            }
        }
    },

    componentDidMount() {
        TodoActions.fetchTodos();
    },

    onTodoStoreChange(items) {
        this.setState({
            items: items,
            fetching: false
        });
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

    getInitialState() {
        return {
            items: TodoStore.getInitialState(),
            fetching: true,
            text: ''
        };
    },

    render() {

        return (
            <div>
                <TodoList items={this.state.items} spinner={this.state.fetching}/>
                <input valueLink={this.linkState('text')}/>
                <Button theme='info' onClick={this.onClickHandler} >Click me!</Button>
            </div>
        );

    }

});
