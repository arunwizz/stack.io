var util = require("util");

module.exports = function(req, res, next) {
    console.log("REQUEST", util.inspect(req, false, 4, true));
    next();
};