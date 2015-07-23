
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from 'modules/todo/actions/todo-actions';
import TodosList from 'modules/todo/components/todos-list';
import TodosHeader from 'modules/todo/components/todos-header';
import metaTitle from 'decorators/meta-title-decorator';
import { Panel, PanelTitle, PanelContent, Grid, Row, Col } from 'components/index';
import i18n from 'i18n';

@metaTitle({
    title: 'Todos'
})
@connect(({ todosState }) => ({
    todosState
}))
class TodoPage extends React.Component {

    static propTypes = {
        todosState: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    renderLayout(items) {
        return (
            <Grid fluid>
                <Row>
                    <Col md='6'>
                        { items.todos }
                    </Col>
                </Row>
            </Grid>
        );
    }

    renderTodos() {
        const actions = bindActionCreators(TodoActions, this.props.dispatch);
        let { todos, fetched } = this.props.todosState;

        return (
            <Panel>
                <PanelTitle>
                    { i18n.t('todos.todo-list') }
                </PanelTitle>
                <PanelContent>
                    <TodosHeader actions={actions} />
                    <TodosList todos={todos} fetched={fetched} actions={actions} />
                </PanelContent>
            </Panel>
        );
    }

    render() {
        return this.renderLayout({
            todos: this.renderTodos()
        });
    }

}

export default {
    TodoPage
};
