import Router from 'react-router';
import Reflux from 'reflux';
import routes from 'routes';

let router = Router.create({
    routes: routes,
    location: Router.HistoryLocation
});

let RouteActions = Reflux.createActions({
    changeRoute: 'changeRoute',
    transitionTo: 'transitionTo',
    replaceWith: 'replaceWith',
    goBack: 'goBack'
});

let RouteStore = Reflux.createStore({

    listenables: RouteActions,

    init() {
        this.state = {
            routeState: {}
        };
    },

    /**
     * Action Callbacks
     */

    onChangeRoute(state) {
        this.state.routeState = state;
        this.trigger(this.state);
    },

    onTransitionTo(path, options = {}) {
        router.transitionTo(path, options);
    },

    onReplaceWith(...params) {
        router.replaceWith(...params);
    },

    onGoBack() {
        router.goBack();
    },

    /**
     * Public Methods
     */

    getCurrentPath() {
        return router.getCurrentPath();
    },

    isCurrentPath(path) {
        return path === this.getCurrentPath();
    },

    getParams() {
        return router.getParams();
    },

    getQuery() {
        return router.getQuery();
    }

});

exports.router = router;
exports.RouteActions = RouteActions;
exports.RouteStore = RouteStore;
