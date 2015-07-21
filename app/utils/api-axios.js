
import axios from 'axios';
import { assign } from 'lodash/object';
import Config from 'utils/config';

axios.interceptors.request.use(
    (config) => {
        return assign({}, config, {
            withCredentials: true
        });
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    }
);

const retrieveToken = async () => {
    if (sessionStorage.getItem('accessToken')) {
        const accessToken = JSON.parse(sessionStorage.getItem('accessToken'));
        const now = new Date().getTime();
        if (accessToken && accessToken.expires > now) {
            return accessToken;
        }
        sessionStorage.removeItem('accessToken');
    }
    const { data } = await axios.get(Config.getApiEndpoint('/user/jwt'));
    sessionStorage.setItem('accessToken', JSON.stringify(data));
    return data;
};

const axiometer = (f) => {

    return async (url, params = {}) => {
        const { withoutToken, ...restParams } = params;
        const endpoint = Config.getApiEndpoint(url);
        if (!withoutToken) {
            let { token } = await retrieveToken();
            restParams.access_token = token;
        }
        return f(endpoint, restParams);
    };
};

export default {
    get: axiometer((url, params) => {
        return axios.get(url, {
            params
        });
    }),
    post: axiometer((url, params) => {
        return axios.post(url, params);
    }),
    del: axiometer((url, params) => {
        return axios.delete(url, {
            params
        });
    })
};
