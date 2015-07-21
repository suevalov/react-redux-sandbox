module.exports = {

    getApiEndpoint(path = '') {
        return `http://localhost:1337/api${path}`;
    }

};
