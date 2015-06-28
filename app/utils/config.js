module.exports = {

    getApiEndpoint(path = '') {
        return `http://localhost:5000/api/${path}`;
    }

};
