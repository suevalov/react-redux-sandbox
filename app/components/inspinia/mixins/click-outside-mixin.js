'use strict';

import _ from 'lodash';

let hasAncestor = (child, parent) => {
    if (child.parentNode === parent) {
        return true;
    }
    if (child.parentNode === null) {
        return false;
    }
    return hasAncestor(child.parentNode, parent);
};

module.exports = {

    isNodeOutside (nodeOut, nodeIn) {
        if (nodeOut === nodeIn) {
            return false;
        }
        return !hasAncestor(nodeOut, nodeIn);
    },

    isNodeInside (nodeIn, nodeOut) {
        return !this.isNodeOutside(nodeIn, nodeOut);
    },

    _onClickMousedown () {
        _.each(this.clickOutsideHandlers, (funcs, ref) => {
            if (this.refs[ref]) {
                this._mousedownRefs[ref] = true;
            }
        });
    },

    _onClickMouseup (event) {
        _.each(this.clickOutsideHandlers, (funcs, ref) => {
            if (this.refs[ref] && this._mousedownRefs[ref]) {
                if (this.isNodeOutside(event.target, this.refs[ref].getDOMNode())) {
                    funcs.forEach(function (fn) {
                        fn.call(this, event);
                    }.bind(this));
                }
            }
            this._mousedownRefs[ref] = false;
        });
    },

    setOnClickOutside (ref, fn) {
        if (!this.clickOutsideHandlers[ref]) {
            this.clickOutsideHandlers[ref] = [];
        }
        this.clickOutsideHandlers[ref].push(fn);
    },

    componentDidMount: function () {
        this.clickOutsideHandlers = {};
        this._didMouseDown = false;
        document.addEventListener('mousedown', this._onClickMousedown);
        document.addEventListener('mouseup', this._onClickMouseup);
        this._mousedownRefs = {};
    },

    componentWillUnmount: function () {
        this.clickOutsideHandlers = {};
        document.removeEventListener('mouseup', this._onClickMouseup);
        document.removeEventListener('mousedown', this._onClickMousedown);
    }
};
