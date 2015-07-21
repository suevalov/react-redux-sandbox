import { get, post, del } from 'utils/api-axios';

export let convertTodoModel = function convertTodoModel(todo) {
    let { id, text, createdAt } = todo;
    return {
        id, /* string */
        text, /* string */
        createdAt: new Date(createdAt).getTime() /* number */
    };
};

export default {

    async fetchTodos() {
        let { data } = await get(`/todos/`);
        return data.map(convertTodoModel);
    },

    async addTodo(text) {
        let { data } = await post('/todos/', {
            text: text
        });
        return convertTodoModel(data);
    },

    async removeTodo(id) {
        await del(`/todos/${id}/`);
    }

};
