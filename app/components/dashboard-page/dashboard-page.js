'use strict';

import React from 'react';
import TodoApp from '../todo-app/todo-app';

export default React.createClass({
  render() {
    return (
      <div>
        Dashboard Page
        <TodoApp />
      </div>
    );
  }
});
