'use strict';

import React, { PropTypes } from 'react';
import Immutable from 'immutable';
import Spinner from 'react-spinkit';
import TodoItem from './todo-item';
import PureComponent from 'react-pure-render/component';

class TodoList extends PureComponent {

    static propTypes = {
        items: PropTypes.instanceOf(Immutable.Map),
        spinner: PropTypes.bool.isRequired
    };

    render() {
        if (this.props.spinner) {
            return (
                <Spinner spinnerName='three-bounce'/>
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
                    <div>List is empty</div>
                );
            }
        }
    }

}

export default TodoList;
