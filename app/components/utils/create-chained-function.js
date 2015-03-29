'use strict';

function createChainedFunction(one, two) {

    let hasOne = typeof one === 'function';
    let hasTwo = typeof two === 'function';

    if (!hasOne && !hasTwo) { return null; }
    if (!hasOne) { return two; }
    if (!hasTwo) { return one; }

    return function chainedFunction() {
        one.apply(this, arguments);
        two.apply(this, arguments);
    };

}

module.exports = createChainedFunction;
