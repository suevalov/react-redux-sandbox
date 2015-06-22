import Config from 'utils/config';
import axios from 'axios';

export default {

    async login(email, password) {
        return await axios.post(Config.getApiEndpoint('/users/login?include=user'), {
            email: email,
            password: password
        });
    },

    async logout(token) {
        return await axios.post(Config.getApiEndpoint(`/users/logout?access_token=${token}`));
    }

};
