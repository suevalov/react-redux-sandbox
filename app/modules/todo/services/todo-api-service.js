import Config from 'utils/config';
import axios from 'axios';

export default {

    fetchTodos() {
        return axios.get(Config.getApiEndpoint('/todos/'));
    },

    addTodo(text) {
        return axios.post(Config.getApiEndpoint('/todos/'), {
            text: text
        });
    },

    removeTodo(id) {
        return axios.delete(Config.getApiEndpoint(`/todos/${id}`));
    }

};
