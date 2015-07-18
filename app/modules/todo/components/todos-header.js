
import React, { PropTypes } from 'react';
import LinkedStateMixin from 'react/lib/LinkedStateMixin';
import {
    Input
} from 'components/index';
import PureComponent from 'react-pure-render/component';

export default class TodosList extends PureComponent {

    static propTypes = {
        actions: PropTypes.object.isRequired
    };

    linkState = LinkedStateMixin.linkState;

    constructor() {
        super();
        this.state = {
            text: ''
        };
    }

    onSubmitHandler = () => {
        let text = this.state.text;
        if (text) {
            this.props.actions.addTodo(text);
            this.setState({
                text: ''
            });
        }
        return false;
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <Input type='text'
                       placeholder='What do you wanna do?'
                       valueLink={this.linkState('text')}/>
            </form>
        );
    }

}
