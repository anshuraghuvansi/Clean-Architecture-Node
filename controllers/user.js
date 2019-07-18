'use strict';

/*
Interface Adapters is a set of adapters that convert data from the format most convenient for 
the use cases and entities, to the format most convenient for some external agency 
such as the Database or the Web. It is this layer, for example, that will wholly 
contain the MVC architecture of a GUI. The Presenters, Views, 
and Controllers all belong in here.
*/

const constants        = require('../constants');
const SignupBodyParams = require('../models/params');
const SigninBodyParams = require('../models/params');
const formatter        = require('../utils/formatter');
const middleware       = require('../middlewares/auth');

class UserController{

    constructor(router, service){
        
        this.service = service

        //bind handlers to this object
        this.signup = this.signup.bind(this);
        this.signin = this.signin.bind(this);
        this.getProfile = this.getProfile.bind(this);
        this.updateProfile = this.updateProfile.bind(this);

        router.post('/signup',this.signup)
        router.post('/signin',this.signin)
        router.get('/profile',middleware.authorize,this.getProfile)
        router.put('/profile/update',middleware.authorize,this.updateProfile)
    }

    signup(req,res){

        const params = new SignupBodyParams(req.body);
        const err = params.validate()
        if(err){
            const response = formatter(err)
            return res.json(response);
        }
        
        this.service.signup(params)
        .then((data)=>{
            const response = formatter(null,data);
            res.json(response);
        }).catch((err)=>{

            if(err.code == 11000){
                err = constants.ErrEmailExist;
            }
            const response = formatter(err)
            res.json(response);
        });
    }

    signin(req,res){

        const params = new SigninBodyParams(req.body);
        const err = params.validate()
        if(err){
            const response = formatter(err)
            return res.json(response);
        }
        
        this.service.signin(params)
        .then((data)=>{
            const response = formatter(null,data);
            res.json(response);
        }).catch((err)=>{
            const response = formatter(err)
            res.json(response);
        });
    }

    getProfile(req,res){

        this.service.getProfile(req.UserID)
        .then((data)=>{
            const response = formatter(null,data);
            res.json(response);
        }).catch((err)=>{
            const response = formatter(err)
            res.json(response);
        });
    }

    updateProfile(req,res){

        const params = req.body;
        if(!params || params.length == 0){
            const response = formatter(null);
            return res.json(response);
        }

        this.service.updateProfile(req.UserID,params)
        .then((data)=>{
            const response = formatter(null,data);
            res.json(response);
        }).catch((err)=>{
            const response = formatter(err)
            res.json(response);
        });
    }
}

module.exports = UserController;