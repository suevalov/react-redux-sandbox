'use strict';

import Router from 'react-router';
import Reflux from 'reflux';
import routes from 'routes';

let RouteActions = Reflux.createActions({
    changeRoute: 'changeRoute'
});

let RouteStore = Reflux.createStore({

    listenables: RouteActions,

    init() {
        this.state = {
            routeState: {}
        };
    },

    getInitialState() {
        return this.state;
    },

    onChangeRoute(state) {
        this.state.routeState = state;
        this.trigger(this.state);
    }

});

let router = Router.create({
    routes: routes,
    location: Router.HistoryLocation
});

export default {
    router: router,
    RouteActions: RouteActions,
    RouteStore: RouteStore
};



