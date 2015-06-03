import Config from 'utils/config';
import axios from 'axios';

export default {

    async fetchTodos() {
        return axios.get(Config.getApiEndpoint('/todos/'));
    },

    async addTodo(text) {
        return axios.post(Config.getApiEndpoint('/todos/'), {
            text: text
        });
    },

    async removeTodo(id) {
        return axios.delete(Config.getApiEndpoint(`/todos/${id}`));
    }

};
