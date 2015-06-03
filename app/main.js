import 'babel-core/polyfill';
import 'react-tools/src/test/phantomjs-shims';

import React from 'react';
import { router, RouteActions } from './router';

router.run((Handler, state) => {
    RouteActions.changeRoute(state);
    React.render(<Handler />, document.getElementById('application'));
});
