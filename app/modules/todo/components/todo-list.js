import React, { PropTypes } from 'react';
import CssTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import Immutable from 'immutable';
import Spinner from 'react-spinkit';
import TodoItem from './todo-item';
import PureComponent from 'react-pure-render/component';

require('./todo-list.less');

class TodoList extends PureComponent {

    static propTypes = {
        items: PropTypes.instanceOf(Immutable.Map),
        spinner: PropTypes.bool.isRequired
    };

    renderSpinner() {
        return (
            <Spinner spinnerName='three-bounce'/>
        );
    }

    renderEmptyMessage() {
        return (
            <div>List is empty</div>
        );
    }

    renderItems() {
        return (
            <ul>
                <CssTransitionGroup transitionName='todo-item'>
                {this.props.items.map((item, index) => {
                    return (
                            <TodoItem className='todo-item' {...item.toJS()} key={index} />
                    );
                })}
                </CssTransitionGroup>
            </ul>
        );
    }

    render() {
        if (this.props.spinner) {
            return this.renderSpinner();
        }
        if (this.props.items.count()) {
            return this.renderItems();
        }
        return this.renderEmptyMessage();
    }

}

export default TodoList;
