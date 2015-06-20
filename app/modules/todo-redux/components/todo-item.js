import React, { PropTypes } from 'react';
import {
    Button,
    Icon
} from 'components/index';
import PureComponent from 'react-pure-render/component';

export default class TodoItem extends PureComponent {

    static propTypes = {
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        actions: PropTypes.object.isRequired
    };

    constructor() {
        super();
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(e) {
        e.preventDefault();
        this.props.actions.removeTodo(this.props.id);
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
