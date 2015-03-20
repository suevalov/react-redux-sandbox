'use strict';

let EventListener = {

    listen (target, eventType, callback) {
        if (target.addEventListener) {
            target.addEventListener(eventType, callback, false);
            return {
                remove: function() {
                    target.removeEventListener(eventType, callback, false);
                }
            };
        } else if (target.attachEvent) {
            target.attachEvent('on' + eventType, callback);
            return {
                remove: function() {
                    target.detachEvent('on' + eventType, callback);
                }
            };
        }
    }

};

module.exports = EventListener;
