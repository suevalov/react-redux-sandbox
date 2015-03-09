'use strict';

import './not-found-page.less';
import React from 'react';

export default React.createClass({
  render() {
    return (
      <div class='not-found-page-component'>
        <h1>Page Not Found</h1>
        <p>Sorry, but the page you were trying to view does not exist.</p>
      </div>
    );
  }
});
