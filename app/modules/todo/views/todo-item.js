'use strict';

import React from 'react/addons';
import TodoActions from '../actions/todo-actions';
import {
    Button,
    Icon
} from 'components/index';

export default React.createClass({

    displayName: 'TodoItem',

    propTypes: {
        id: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired
    },

    mixins: [
        React.addons.PureRenderMixin
    ],

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
