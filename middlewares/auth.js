'use strict';

const jsonwebtoken = require('jsonwebtoken');
const formatter    = require('../utils/formatter');
const constants    = require('../constants');

const authorize = function(req,res,next){
    
    const token = req.headers.authorization.replace('Bearer ','');

    if(!token){
        res.json(formatter(constants.ErrInvalidToken));
        return;
    }

    try {
        const result = jsonwebtoken.verify(token,process.env.SECRET)
        req.UserID = result.data;
        next();
    }
    catch{
        res.json(formatter(constants.ErrInvalidToken));
        return;
    }
}

module.exports = {authorize};