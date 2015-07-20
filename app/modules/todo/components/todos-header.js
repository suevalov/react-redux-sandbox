
import React, { PropTypes } from 'react';
import LinkedStateMixin from 'react/lib/LinkedStateMixin';
import {
    Input
} from 'components/index';
import PureComponent from 'react-pure-render/component';
import i18n from 'i18n';

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

    onSubmitHandler = (e) => {
        e.preventDefault();
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
            <form onSubmit={this.onSubmitHandler}>
                <Input type='text'
                       placeholder={i18n.t('todos.input-placeholder')}
                       valueLink={this.linkState('text')}/>
            </form>
        );
    }

}
