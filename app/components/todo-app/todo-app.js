'use strict';


import React from 'react';
import Reflux from 'reflux';
import { PureRenderMixin } from 'react/addons';
import TodoStore from '../../stores/todo-store';
import TodoActions from '../../actions/todo-actions';
import { Button } from '../inspinia';


var TodoItem = React.createClass({

    mixins: [PureRenderMixin],

    propTypes: {
        id: React.PropTypes.number.isRequired,
        label: React.PropTypes.string.isRequired
    },

    clickHandler(e) {
        e.preventDefault();
        TodoActions.removeItem(this.props.id);
    },

    render() {
        return (
            <li>{this.props.label}
                <Button onClick={this.clickHandler}>x</Button>
            </li>
        );
    }

});

var TodoList = React.createClass({

    render() {
        return <ul>{this.props.items.map((item) => {
            return (
                <TodoItem label={item.label} id={item.id} />
            );
        }).toJS()}</ul>;
    }

});

export default React.createClass({

    mixins: [
        Reflux.connect(TodoStore, 'items'),
        PureRenderMixin
    ],

    onInputChange(e) {
        var text = e.target.value;
        if (e.which === 13 && text) {
            TodoActions.addItem(text);
            e.target.value = '';
        } else if (e.which === 27) {
            e.target.value = '';
        }
    },

    onClickHandler() {
        alert('You have clicked the button!');
    },

    render() {
        return (
            <div>
                <TodoList items={this.state.items} />
                <input onKeyUp={this.onInputChange} />
                <Button theme='default' size='small' onClick={this.onClickHandler}>Click me!</Button>
            </div>
        );
    }

});
