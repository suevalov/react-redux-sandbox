'use strict';

import Config from './config';
import axios from 'axios';

export default {

    auth() {

        return {

            async login(email, password) {
                return axios.post(Config.getApiEndpoint('/users/login?include=user'), {
                    email: email,
                    password: password
                });
            },

            async logout(token) {
                return axios.delete(Config.getApiEndpoint(`/users/logout?access_token=${token}`));
            }

        };

    },

    todos() {

        return {

            async fetch() {
                return axios.get(Config.getApiEndpoint('/todos/'));
            },

            async add(text) {
                return axios.post(Config.getApiEndpoint('/todos/'), {
                    text: text
                });
            },

            async remove(id) {
                return axios.delete(Config.getApiEndpoint(`/todos/${id}`));
            }

        };

    }

};
