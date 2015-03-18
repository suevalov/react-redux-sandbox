'use strict';


import React from 'react/addons';
import Reflux from 'reflux';
import TodoStore from '../../stores/todo-store';
import TodoActions from '../../actions/todo-actions';
import { Button, ButtonGroup, Icon } from '../inspinia';

let { PureRenderMixin, LinkedStateMixin } = React.addons;

var TodoItem = React.createClass({

    mixins: [ PureRenderMixin ],

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
            <li>
                {this.props.label}
                &nbsp;
                <Button theme='danger' size='xsmall' onClick={this.clickHandler}>
                    <Icon name='remove' />
                    &nbsp;
                    Remove
                </Button>
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
        PureRenderMixin,
        LinkedStateMixin
    ],

    onClickHandler() {
        var text = this.state.text;
        if (text) {
            TodoActions.addItem(text);
            this.setState({
                text: ''
            });
        }
    },

    getInitialState() {
        return {
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
                <TodoList items={this.state.items} />
                <input valueLink={this.linkState('text')} />
                <Button {...buttonProps} >Click me!</Button>
                <Button theme='danger' circle={true} size='large' dim={true}>
                    <Icon name='heart' />
                </Button>

                <div>
                    <ButtonGroup>
                        <Button>First</Button>
                        <Button>Second</Button>
                        <Button theme='warning'>Third</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }

});
