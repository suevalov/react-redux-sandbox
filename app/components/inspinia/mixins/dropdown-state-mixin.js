'use strict';

import EventListener from '../utils/event-listener';
import isNodeInRoot from '../utils/is-node-in-root';

module.exports = {

    getInitialState() {
        return {
            open: false
        };
    },

    bindRootCloseHandlers() {
        this._onDocumentClickListener =
            EventListener.listen(document, 'click', this.handleDocumentClick);
        this._onDocumentKeyupListener =
            EventListener.listen(document, 'keyup', this.handleDocumentKeyUp);
    },

    unbindRootCloseHandlers() {
        if (this._onDocumentClickListener) {
            this._onDocumentClickListener.remove();
        }

        if (this._onDocumentKeyupListener) {
            this._onDocumentKeyupListener.remove();
        }
    },

    setDropdownState(newState, onStateChangeComplete) {

        if (newState) {
            this.bindRootCloseHandlers();
        } else {
            this.unbindRootCloseHandlers();
        }

        this.setState({
            open: newState
        }, onStateChangeComplete);

    },

    /**
     * @param {Event} e
     */
    handleDocumentKeyUp(e) {
        if (e.keyCode === 27) {
            this.setDropdownState(false);
        }
    },

    /**
     * @param {Event} e
     */
    handleDocumentClick(e) {
        // If the click originated from within this component
        // don't do anything.
        if (isNodeInRoot(e.target, this.getDOMNode())) {
            return;
        }

        this.setDropdownState(false);
    },

    componentWillUnmount: function () {
        this.unbindRootCloseHandlers();
    }

};
