'use strict';

describe('Main', function () {
  var ReactApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ReactApp = require('../../../src/scripts/components/ReactApp.jsx');
    component = ReactApp();
  });

  it('should create a new instance of ReactApp', function () {
    expect(component).toBeDefined();
  });
});
