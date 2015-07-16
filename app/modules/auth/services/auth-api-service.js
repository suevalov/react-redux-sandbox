import Config from 'utils/config';
import axios from 'axios';

export default {

    async login(email, password) {
        let { data } = await axios.post(Config.getApiEndpoint('/users/login?include=user'), {
            email: email,
            password: password
        });
        return data;
    },

    async logout(token) {
        let { data } = await axios.post(Config.getApiEndpoint(`/users/logout?access_token=${token}`));
        return data;
    }

};
