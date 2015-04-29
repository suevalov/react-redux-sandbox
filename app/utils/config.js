'use strict';

import Immutable from 'immutable';

const config = Immutable.fromJS({
    apiendpoint: 'http://localhost:5000/api'
});

module.exports = {

    getApiEndpoint(path) {
        path = path || '';
        return config.get('apiendpoint') + path;
    }

};
