/* eslint-disable no-var, func-names */

var gemini = require('gemini');
var _ = require('lodash');

var tests = [
    // Normal Buttons
    [ 'button:default', '.button-samples-page__normal .btn.btn-default' ],
    [ 'button:primary', '.button-samples-page__normal .btn.btn-primary' ],
    [ 'button:info', '.button-samples-page__normal .btn.btn-info' ],
    [ 'button:warning', '.button-samples-page__normal .btn.btn-warning' ],
    [ 'button:danger', '.button-samples-page__normal .btn.btn-danger' ],
    [ 'button:white', '.button-samples-page__normal .btn.btn-white' ],
    [ 'button:link', '.button-samples-page__normal .btn.btn-link' ],
    // Sized Buttons
    [ 'button:extra-small', '.button-samples-page__sizes  .btn.btn-xs' ],
    [ 'button:small', '.button-samples-page__sizes  .btn.btn-sm' ],
    [ 'button:large', '.button-samples-page__sizes  .btn.btn-lg' ],
    // Outline Buttons
    [ 'button:outline:default', '.button-samples-page__outline .btn.btn-outline.btn-default' ],
    [ 'button:outline:primary', '.button-samples-page__outline .btn.btn-outline.btn-primary' ],
    [ 'button:outline:info', '.button-samples-page__outline .btn.btn-outline.btn-info' ],
    [ 'button:outline:warning', '.button-samples-page__outline .btn.btn-outline.btn-warning' ],
    [ 'button:outline:danger', '.button-samples-page__outline .btn.btn-outline.btn-danger' ],
    // Active Buttons
    [ 'button:active:default', '.button-samples-page__active .btn.active.btn-default' ],
    [ 'button:active:primary', '.button-samples-page__active .btn.active.btn-primary' ],
    [ 'button:active:info', '.button-samples-page__active .btn.active.btn-info' ],
    [ 'button:active:warning', '.button-samples-page__active .btn.active.btn-warning' ],
    [ 'button:active:danger', '.button-samples-page__active .btn.active.btn-danger' ],
    [ 'button:active:white', '.button-samples-page__active .btn.active.btn-white' ],
    [ 'button:active:link', '.button-samples-page__active .btn.active.btn-link' ],
    // Disabled Buttons
    [ 'button:disabled:default', '.button-samples-page__disabled .btn.disabled.btn-default' ],
    [ 'button:disabled:primary', '.button-samples-page__disabled .btn.disabled.btn-primary' ],
    [ 'button:disabled:info', '.button-samples-page__disabled .btn.disabled.btn-info' ],
    [ 'button:disabled:warning', '.button-samples-page__disabled .btn.disabled.btn-warning' ],
    [ 'button:disabled:danger', '.button-samples-page__disabled .btn.disabled.btn-danger' ],
    [ 'button:disabled:white', '.button-samples-page__disabled .btn.disabled.btn-white' ],
    [ 'button:disabled:link', '.button-samples-page__disabled .btn.disabled.btn-link' ]
];


_.each(tests, function(test) {
    gemini.suite(test[0], function(suite) {
        suite
            .setUrl('/components/buttons')
            .setCaptureElements(test[1])
            .before(function(actions, find) {
                this.button = find(test[1]);
            })
            .capture('plain')
            .capture('hovered', function(actions) {
                actions.mouseMove(this.button);
                if (test[0].indexOf('outline') !== -1) {
                    actions.wait(600);
                }
            })
            .capture('pressed', function(actions) {
                actions.mouseDown(this.button);
            })
            .capture('clicked', function(actions) {
                actions.mouseUp(this.button);
            });
    });
});
