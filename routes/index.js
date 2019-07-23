'use strict';

const express        = require('express');
const UserService    = require('../services/user');
const UserRepository = require('../repository/user');
const UserController = require('../controllers/user');

function init(app) {
    addAPIRoute(app);
}

function addAPIRoute(app){
    const apiRoute = express.Router();
    addV1Route(apiRoute)
    app.use('/api',apiRoute);
}

function addV1Route(apiRoute){
    const v1Route = express.Router();
    addUserRoute(v1Route)
    apiRoute.use('/v1',v1Route);
}

function addUserRoute(v1Route){
    
    const userRoute = express.Router();
    v1Route.use('/user',userRoute);

    const userRepository = new UserRepository(); 
    const userService = new UserService(userRepository);
    const _ = new UserController(userRoute,userService);
}


module.exports = {init}