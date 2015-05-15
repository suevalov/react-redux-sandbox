'use strict';

import React from 'react/addons';
import Immutable from 'immutable';
import Spinner from 'react-spinkit';
import TodoItem from './todo-item';

let { PureRenderMixin } = React.addons;

export default React.createClass({

    propTypes: {
        items: React.PropTypes.instanceOf(Immutable.Map),
        spinner: React.PropTypes.bool.isRequired
    },

    mixins: [
        PureRenderMixin
    ],

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

});
