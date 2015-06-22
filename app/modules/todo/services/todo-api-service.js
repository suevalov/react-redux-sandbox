import Config from 'utils/config';
import axios from 'axios';

export default {

    async fetchTodos() {
        return await axios.get(Config.getApiEndpoint('/todos/'));
    },

    async addTodo(text) {
        return await axios.post(Config.getApiEndpoint('/todos/'), {
            text: text
        });
    },

    async removeTodo(id) {
        return await axios.delete(Config.getApiEndpoint(`/todos/${id}`));
    }

};
