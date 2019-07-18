'use strict';

const jsonwebtoken = require('jsonwebtoken');

module.exports = function(userID){

    return jsonwebtoken.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 30), //30 days
        data:userID
    },process.env.SECRET);
}
