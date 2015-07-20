const authSessionService = {

    getSession() {
        const user = sessionStorage.getItem('authUser') ? JSON.parse(sessionStorage.getItem('authUser')) : null;
        const authToken = sessionStorage.getItem('authToken') || null;
        return {
            user,
            authToken
        };
    },

    setSession({ user = null, authToken = null }) {
        sessionStorage.setItem('authUser', user ? JSON.stringify(user) : null);
        sessionStorage.setItem('authToken', authToken);
    },

    clearSession() {
        sessionStorage.removeItem('authUser');
        sessionStorage.removeItem('authToken');
    }

};

export default authSessionService;
