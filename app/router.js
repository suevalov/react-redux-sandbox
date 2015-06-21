import Router from 'react-router';
import routes from 'routes';

let router = Router.create({
    routes: routes,
    location: Router.HistoryLocation
});

exports.router = router;
