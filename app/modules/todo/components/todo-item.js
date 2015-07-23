import React, { PropTypes } from 'react';
import {
    Button,
    Icon
} from 'components/index';
import PureComponent from 'react-pure-render/component';
import i18n from 'i18n';

const styles = require('./todo-item.css');

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
            <div className={styles.root}>
                <div className={styles.text}>{ this.props.text }</div>
                <div className={styles.removeButton}>
                    <Button theme='danger' size='xsmall' onClick={this.onClickHandler}>
                        <Icon name='remove'/>
                        &nbsp;
                        { i18n.t('todos.buttons.remove') }
                    </Button>
                </div>
            </div>
        );
    }

}
