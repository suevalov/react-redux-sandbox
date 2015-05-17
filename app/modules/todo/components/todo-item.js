'use strict';

import React from 'react';
import TodoActions from '../actions/todo-actions';
import {
    Button,
    Icon
} from 'components/index';
import PureComponent from 'react-pure-render/component';

class TodoItem extends PureComponent {

    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(e) {
        e.preventDefault();
        TodoActions.removeTodo(this.props.id);
    }

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

}

TodoItem.propTypes = {
    id: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
};

export default TodoItem;
