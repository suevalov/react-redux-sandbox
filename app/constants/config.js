'use strict';

import Immutable from 'immutable';

const config = Immutable.fromJS({
    apiendpoint: 'http://localhost:3000/api'
});

module.exports = {

    getApiEndpoint() {
        return config.get('apiendpoint');
    }

};
