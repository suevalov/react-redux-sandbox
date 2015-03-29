'use strict';


import React from 'react/addons';
import Reflux from 'reflux';
import Immutable from 'immutable';
import TodoStore from '../../stores/todo-store';
import TodoActions from '../../actions/todo-actions';
import Spinner from 'react-spinkit';
import {
    Button,
    ButtonGroup,
    DropdownButton,
    MenuItem,
    Icon
    } from '../inspinia';

let { PureRenderMixin, LinkedStateMixin } = React.addons;

var TodoItem = React.createClass({

    mixins: [PureRenderMixin],

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

    mixins: [
        Reflux.listenTo(TodoStore, 'onTodoStoreChange'),
        PureRenderMixin,
        LinkedStateMixin
    ],

    componentDidMount() {
        TodoActions.fetchTodos();
        this.setState({
            fetching: true
        });
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
            fetching: false,
            text: ''
        };
    },

    render() {

        let buttonProps = {
            theme: 'info',
            onClick: this.onClickHandler
        };

        return (
            <div>
                <TodoList items={this.state.items} spinner={this.state.fetching}/>
                <input valueLink={this.linkState('text')}/>
                <Button {...buttonProps} >Click me!</Button>
                <Button theme='danger' circle={true} size='large' dim={true}>
                    <Icon name='heart'/>
                </Button>

                <div>
                    <ButtonGroup>
                        <Button>First</Button>
                        <Button>Second</Button>
                        <Button theme='warning'>Third</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <DropdownButton title='Dropdown'>
                        <MenuItem eventKey='1'>MenuItem 1</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey='2'>MenuItem 2</MenuItem>
                    </DropdownButton>
                    <DropdownButton title='Another Dropdown'/>
                </div>
            </div>
        );
    }

});
