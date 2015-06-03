import React, { PropTypes } from 'react';
import TodoActions from '../actions/todo-actions';
import {
    Button,
    Icon
} from 'components/index';
import PureComponent from 'react-pure-render/component';

class TodoItem extends PureComponent {

    static propTypes = {
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    };

    constructor() {
        super();
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(e) {
        e.preventDefault();
        TodoActions.removeTodo(this.props.id);
    }

    render() {
        return (
            <li>
                {this.props.text}
                &nbsp;
                <Button theme='danger' size='xsmall' onClick={this.onClickHandler}>
                    <Icon name='remove'/>
                    &nbsp;
                    Remove
                </Button>
            </li>
        );
    }

}

export default TodoItem;
