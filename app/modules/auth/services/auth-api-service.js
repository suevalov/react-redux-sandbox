import Config from 'utils/config';
import axios from 'axios';

export default {

    async login(email, password) {
        let { data } = await axios.post(Config.getApiEndpoint('/auth/login'), {
            email: email,
            password: password
        });
        return data;
    },

    async logout() {
        let { data } = await axios.post(Config.getApiEndpoint(`/auth/logout`));
        return data;
    }

};
