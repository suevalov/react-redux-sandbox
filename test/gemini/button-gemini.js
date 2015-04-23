'use strict';

var gemini = require('gemini');
var _ = require('lodash');

var buttons = [
    'btn-default',
    'btn-primary',
    'btn-info',
    'btn-warning',
    'btn-danger',
    'btn-white',
    'btn-link'
];

_.each(buttons, function(button) {
    gemini.suite('button:' + button, function(suite) {
        suite
            .setUrl('/components/buttons')
            .setCaptureElements(
            '.button-samples-page__normal .btn.' + button
        )
            .before(function(actions, find) {
                this.button = find('.button-samples-page__normal .btn.' + button);
            })
            .capture('plain')
            .capture('hovered', function(actions) {
                actions.mouseMove(this.button);
            })
            .capture('pressed', function(actions) {
                actions.mouseDown(this.button);
            })
            .capture('clicked', function(actions) {
                actions.mouseUp(this.button);
            });
    });
});

var buttonSizes = [
    'btn-xs',
    'btn-sm',
    'btn-lg'
];

_.each(buttonSizes, function(button) {
    gemini.suite('button:' + button, function(suite) {
        suite
            .setUrl('/components/buttons')
            .setCaptureElements(
            '.button-samples-page__sizes .btn.' + button
        )
            .before(function(actions, find) {
                this.button = find('.button-samples-page__sizes .btn.' + button);
            })
            .capture('plain')
            .capture('hovered', function(actions) {
                actions.mouseMove(this.button);
            })
            .capture('pressed', function(actions) {
                actions.mouseDown(this.button);
            })
            .capture('clicked', function(actions) {
                actions.mouseUp(this.button);
            });
    });
});


var outlineButtons = [
    'btn-default',
    'btn-primary',
    'btn-info',
    'btn-warning',
    'btn-danger'
];

_.each(outlineButtons, function(button) {
    gemini.suite('button:outline:' + button, function(suite) {
        suite
            .setUrl('/components/buttons')
            .setCaptureElements(
            '.button-samples-page__outline .btn.btn-outline.' + button
        )
            .before(function(actions, find) {
                this.button = find('.button-samples-page__outline .btn.btn-outline.' + button);
            })
            .capture('plain')
            .capture('hovered', function(actions) {
                actions.mouseMove(this.button);
                actions.wait(600);
            })
            .capture('pressed', function(actions) {
                actions.mouseDown(this.button);
            })
            .capture('clicked', function(actions) {
                actions.mouseUp(this.button);
            });
    });
});
