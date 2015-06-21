import 'babel-core/polyfill';
import 'react-tools/src/test/phantomjs-shims';

import React from 'react';
import { router } from './router';

router.run((Handler) => {
    React.render(<Handler />, document.getElementById('application'));
});
