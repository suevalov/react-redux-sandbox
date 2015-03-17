'use strict';

/**
 * Combines multiple className strings into one.
 * http://jsperf.com/joinclasses-args-vs-array
 *
 * @param {...?string} classes
 * @return {string}
 */
function joinClasses(className/*, ... */) {
    if (!className) {
        className = '';
    }
    var nextClass;
    var argLength = arguments.length;
    if (argLength > 1) {
        for (var ii = 1; ii < argLength; ii++) {
            nextClass = arguments[ii];
            if (nextClass) {
                className = (className ? className + ' ' : '') + nextClass;
            }
        }
    }
    return className;
}

module.exports = joinClasses;
