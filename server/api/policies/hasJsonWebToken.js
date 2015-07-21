var waterlock = require('waterlock');

/**
 * hasJsonWebToken
 *
 * @module      :: Policy
 * @description :: Assumes that your request has an jwt;
 *
 * @docs        :: http://waterlock.ninja/documentation
 */
module.exports = function hasJsonWebToken(req, res, next) {
    waterlock.validator.validateTokenRequest(req, function(err, user){
        if (err) {
            return res.forbidden(err);
        }

        // valid request
        next();
    });
};
