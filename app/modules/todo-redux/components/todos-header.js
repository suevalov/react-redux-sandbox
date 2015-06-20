
import React, { PropTypes } from 'react';
import LinkedStateMixin from 'react/lib/LinkedStateMixin';
import {
    Button,
    Input
} from 'components/index';
import bindAll from 'utils/bind-all';

export default class TodosList extends React.Component {

    static propTypes = {
        actions: PropTypes.object.isRequired
    };

    linkState = LinkedStateMixin.linkState;

    constructor() {
        super();
        bindAll(this, 'onClickHandler');
        this.state = {
            text: ''
        };
    }

    onClickHandler() {
        let text = this.state.text;
        if (text) {
            this.props.actions.addTodo(text);
            this.setState({
                text: ''
            });
        }
    }

    render() {
        return (
            <div>
                <Input type='text' valueLink={this.linkState('text')}/>
                <Button theme='info' onClick={this.onClickHandler}>Add</Button>
            </div>
        );
    }

}
