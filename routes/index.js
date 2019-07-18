'use strict';

const express        = require('express');
const UserService    = require('../services/user');
const UserRepository = require('../repository/user');
const UserController = require('../controllers/user');

function init(app,db) {
    addAPIRoute(app,db);
}

function addAPIRoute(app,db){
    const apiRoute = express.Router();
    addV1Route(apiRoute,db)
    app.use('/api',apiRoute);
}

function addV1Route(apiRoute,db){
    const v1Route = express.Router();
    addUserRoute(v1Route,db)
    apiRoute.use('/v1',v1Route);
}

function addUserRoute(v1Route,db){
    
    const userRoute = express.Router();
    v1Route.use('/user',userRoute);

    const userRepository = new UserRepository(db); 
    const userService = new UserService(userRepository);
    const _ = new UserController(userRoute,userService);
}


module.exports = {init}