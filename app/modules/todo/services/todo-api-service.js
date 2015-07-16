import Config from 'utils/config';
import axios from 'axios';

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
        let { data } = await axios.get(Config.getApiEndpoint('/todos/'));
        return data.map(convertTodoModel);
    },

    async addTodo(text) {
        let { data } = await axios.post(Config.getApiEndpoint('/todos/'), {
            text: text
        });
        return convertTodoModel(data);
    },

    async removeTodo(id) {
        await axios.delete(Config.getApiEndpoint(`/todos/${id}`));
    }

};
